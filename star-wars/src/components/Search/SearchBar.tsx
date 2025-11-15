export default function SearchBar({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <input
            type="search"
            placeholder="Search by name..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full md:w-1/3 border rounded px-3 py-2 focus:outline-none focus:ring"
        />
    );
}
