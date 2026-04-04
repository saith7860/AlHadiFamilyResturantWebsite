
import { Search } from "lucide-react"
const SearchBar = () => {
  return (
    <>
    <div className="grid grid-cols-12">
        {/* Search Button */}
        <div className="col-span-12 p-2 pt-4">
             <div className="relative">
              <input
                className="pl-10 text-black w-full font-bold py-2 border-2 border-gray-200 rounded-lg shadow-lg"
                type="text"
                placeholder="Search..."
                required
              />
              <div
                className="absolute inset-y-0 pl-3
                    flex items-center 
                    pointer-events-none"
              >
                <Search className="" size={20}/>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default SearchBar