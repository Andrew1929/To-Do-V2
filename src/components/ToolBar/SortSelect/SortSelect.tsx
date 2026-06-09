import type { JSX } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './SortSelect.css';

export function SortSelect() : JSX.Element {
    return (
        <div className="sort-select">
            <p className="sort-select__label">Sort by:</p>

            <select className="sort-select__select">
                <option value="date">User ID ↑</option>
                <option value="title">User ID ↓</option>
                <option value="completed">Title ↑</option>
                <option value="completed">Title ↓</option>
            </select>

            <FontAwesomeIcon className='sort-select__icon' icon={faChevronDown} />
        </div>
    )
}