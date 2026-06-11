import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './SortSelect.css';

interface SortSelectProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
}

export function SortSelect( { sortBy, setSortBy }: SortSelectProps) {
    return (
        <div className="sort-select">
            <p className="sort-select__label">Sort by:</p>

            <select 
                className="sort-select__select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="User ID ↑">User ID ↑</option>
                <option value="User ID ↓">User ID ↓</option>
                <option value="Title ↑">Title ↑</option>
                <option value="Title ↓">Title ↓</option>
            </select>

            <FontAwesomeIcon className='sort-select__icon' icon={faChevronDown} />
        </div>
    )
}