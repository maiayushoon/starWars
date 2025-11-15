/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Person, Homeworld, SpeciesCache } from "../types/types";
import { fetchPeoplePage, fetchHomeworld, fetchSpeciesName } from "../services/api";
import { formatDateDDMMYYYY } from "../utils/formatDateDDMMYYY";

import Header from "../components/Header/Header";
import CardSkeleton from "../components/Skeleton/CardSkeleton";
import PersonModal from "../components/Modal/CharacterModal";
import CharacterCard from "../components/Card/CharacterCard";

export default function StarWar() {

    const INITIAL_URL = "https://swapi.dev/api/people/";

    const [people, setPeople] = useState<Person[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(INITIAL_URL);
    const [prevUrl, setPrevUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [speciesCache, setSpeciesCache] = useState<SpeciesCache>({});
    const [dateAddedMap, setDateAddedMap] = useState<Record<string, string>>({});

    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
    const [selectedHomeworld, setSelectedHomeworld] = useState<Homeworld | null>(null);
    const [modalLoading, setModalLoading] = useState<boolean>(false);

    const [searchTerm, setSearchTerm] = useState("");


    const fetchPage = useCallback(async (url: string | null) => {
        if (!url) return;

        setLoading(true);
        setError(null);

        try {
            const data = await fetchPeoplePage(url);
            setPeople(data.results);
            setNextUrl(data.next);
            setPrevUrl(data.previous);

            // Add timestamps for new people
            setDateAddedMap((prev) => {
                const updated = { ...prev };
                data.results.forEach((p: any) => {
                    if (!updated[p.url]) {
                        updated[p.url] = formatDateDDMMYYYY(new Date());
                    }
                });
                return updated;
            });

            const speciesUrls = Array.from(new Set(data.results.flatMap((p) => p.species))).filter(Boolean);

            const missing = speciesUrls.filter((s: any) => !speciesCache[s]);

            if (missing.length > 0) {
                const fetched: SpeciesCache = {};

                await Promise.all(
                    missing.map(async (url) => {
                        if (!url) return;
                        try {
                            fetched[url] = await fetchSpeciesName(url);
                        } catch {
                            fetched[url] = "Unknown";
                        }
                    })
                );

                setSpeciesCache((prev) => ({ ...prev, ...fetched }));
            }
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            setError(msg);
        } finally {
            setTimeout(() => setLoading(false), 250);
        }
    }, []);

    useEffect(() => {
        fetchPage(INITIAL_URL);
    }, [fetchPage]);


    const openModal = useCallback(async (person: Person) => {
        setSelectedPerson(person);
        setSelectedHomeworld(null);
        setModalLoading(true);

        try {
            const hw = await fetchHomeworld(person.homeworld || "");
            setSelectedHomeworld(hw);
        } catch {
            setSelectedHomeworld(null);
        } finally {
            setModalLoading(false);
        }
    }, []);


    const filteredPeople = useMemo(() => {
        if (!searchTerm.trim()) return people;
        const q = searchTerm.toLowerCase();
        return people.filter((p: any) => p.name.toLowerCase().includes(q));
    }, [people, searchTerm]);


    const skeletons = Array.from({ length: 10 });

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8" style={{ background: "var(--bg)" }}>
            <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                loading={loading}
                prevUrl={prevUrl}
                nextUrl={nextUrl}
                fetchPage={fetchPage}
            />

            <main className="max-w-6xl mx-auto">
                {error && <div className="text-red-600 mb-4">Error: {error}</div>}

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {loading
                        ? skeletons.map((_, i) => <CardSkeleton key={i} />)
                        : filteredPeople.map((p: any) => {
                            const speciesName = p.species.length
                                ? speciesCache[p.species[0]] ?? "Unknown"
                                : "Human";
                            const dateAdded = dateAddedMap[p.url];

                            return (
                                <CharacterCard
                                    key={p.url}
                                    person={p}
                                    speciesName={speciesName}
                                    dateAdded={dateAdded}
                                    onClick={() => openModal(p)}
                                />
                            );
                        })}
                </section>

                {!loading && filteredPeople.length === 0 && (
                    <div className="text-center py-8 text-gray-500">No characters found.</div>
                )}
            </main>

            {selectedPerson && (
                <PersonModal
                    person={selectedPerson}
                    homeworld={selectedHomeworld}
                    dateAdded={dateAddedMap[selectedPerson.url || ""]}
                    loading={modalLoading}
                    onClose={() => setSelectedPerson(null)}
                />
            )}
        </div>
    );
}
