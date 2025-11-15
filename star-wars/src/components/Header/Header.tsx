/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchBar from '../Search/SearchBar'
import Pagination from '../Pagination/Pagination'

const Header = ({ searchTerm, setSearchTerm, loading, prevUrl, nextUrl, fetchPage }: any) => {
    return (
        <header className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Star Wars Characters</h1>
            <div className="flex gap-2 items-center mb-6">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                <Pagination loading={loading} prevUrl={prevUrl} nextUrl={nextUrl} onPrev={() => fetchPage(prevUrl)} onNext={() => fetchPage(nextUrl)} />
            </div>
        </header>
    )
}

export default Header