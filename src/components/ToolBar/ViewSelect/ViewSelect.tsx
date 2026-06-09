import type { JSX } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ViewSelect.css';

export function ViewSelect() : JSX.Element {
    return (
        <div className="view-select">
            <p className="view-select__label">View:</p>
            
            <select className="view-select__select">
                <option value="all">All</option>
                <option value="completed">Completed</option>
            </select>

            <FontAwesomeIcon className='view-select__icon' icon={faChevronDown} />
        </div>
    )
}