import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export function SearchBar ({ searchQuery, setSearchQuery }: SearchBarProps) {
    return (
        <label className="search-bar">
            <FontAwesomeIcon className="search-bar__icon" icon={faMagnifyingGlass} />

            <input className="search-bar__input" type="text" placeholder="Search tasks..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                    setSearchQuery(e.currentTarget.value);
                }}
            />
        </label>
    )
}