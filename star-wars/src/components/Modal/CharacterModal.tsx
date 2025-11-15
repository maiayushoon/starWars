/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "./Modal";
import { X } from "lucide-react";
import { personIdFromUrl } from "../../utils/personIdFromUrl";
import { cmToMetersString } from "../../utils/cmToMetersString";
import { parseMass } from "../../utils/parseMass";
import ModalSkeleton from "../Skeleton/ModalSkeleton";

export default function PersonModal({
    person,
    homeworld,
    dateAdded,
    loading,
    onClose,
}: any) {
    if (!person) return null;

    return (
        <Modal onClose={onClose}>
            {loading ? (
                <ModalSkeleton />
            ) : (
                <>
                    <div className="p-4 border-b flex items-center justify-between">
                        <h3 className="text-xl font-bold">{person.name}</h3>
                        <button className="px-3 py-1" onClick={onClose}>
                            <X />
                        </button>
                    </div>

                    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img
                            src={`https://picsum.photos/seed/${personIdFromUrl(
                                person.url
                            )}/600/400`}
                            className="w-full h-48 object-cover rounded"
                        />

                        <div className="md:col-span-2 space-y-2">
                            <div className="flex gap-4">
                                <div>
                                    <div className="text-sm text-gray-500">Height</div>
                                    <div className="font-medium">
                                        {cmToMetersString(person.height)}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-500">Mass</div>
                                    <div className="font-medium">
                                        {parseMass(person.mass)}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-500">Birth Year</div>
                                    <div className="font-medium">{person.birth_year}</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <div className="text-sm text-gray-500">Films</div>
                                    <div className="font-medium">{person.films.length}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Date added</div>
                                    <div className="font-medium">{dateAdded}</div>
                                </div>

                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Homeworld</div>

                                {homeworld ? (
                                    <div className="mt-2 p-3 border rounded">
                                        <div className="font-semibold">{homeworld.name}</div>
                                        <div className="text-sm text-gray-600">
                                            Terrain: {homeworld.terrain}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Climate: {homeworld.climate}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Population: {homeworld.population}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-sm text-gray-600 mt-1">Unknown</div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Modal>
    );
}
