    /* eslint-disable @typescript-eslint/no-explicit-any */
    import { personIdFromUrl } from "../../utils/personIdFromUrl";
    import { colorForSpecies } from "../../utils/colorForSpecies";

    export default function CharacterCard({ person, speciesName, dateAdded, onClick }: any) {
        const id = personIdFromUrl(person.url);
        const bg = colorForSpecies(speciesName);

        return (
            <article
                onClick={onClick}
                className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg 
        transition-transform hover:-translate-y-1 bg-white animate-fadeIn"
            >
                <div className="h-48 w-full" style={{ background: bg }}>
                    <img
                        src={`https://picsum.photos/seed/${id}/640/360`}
                        alt={person.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="p-3 flex items-start justify-between">
                    <div>
                        <h2 className="font-semibold text-lg">{person.name}</h2>
                        <p className="text-xs text-gray-500">Species: {speciesName}</p>
                    </div>
                    <div className="text-xs text-gray-600">{dateAdded}</div>
                </div>
            </article>
        );
    }
