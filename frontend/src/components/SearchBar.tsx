import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Search, X } from "lucide-react";

interface Props {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  initialValue?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search contacts..",
  className = "",
  initialValue = "",
}: Props) => {
  const [query, setQuery] = useState(initialValue);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-10 py-2.5 rounded-lg border border-gray-300 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
          placeholder={placeholder}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-gray-300 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
