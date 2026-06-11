import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ViewSelect.css';

interface ViewSelectProps {
    viewBy: string;
    setViewBy: (viewBy: string) => void;
}

export function ViewSelect({ viewBy, setViewBy }: ViewSelectProps) {
    return (
        <div className="view-select">
            <p className="view-select__label">View:</p>
            
            <select 
                className="view-select__select" 
                value={viewBy} 
                onChange={(e) => setViewBy(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>

            <FontAwesomeIcon className='view-select__icon' icon={faChevronDown} />
        </div>
    )
}