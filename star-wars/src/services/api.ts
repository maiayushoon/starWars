import type { Person, SWAPIListResponse, Homeworld } from "../types/types";

export const SWAPI_BASE = "https://swapi.dev/api";

export async function fetchPeoplePage(url: string): Promise<SWAPIListResponse<Person>> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export async function fetchHomeworld(url: string): Promise<Homeworld> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export async function fetchSpeciesName(url: string): Promise<string> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const j = await res.json();
    return j.name;
}
