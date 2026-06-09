import type { JSX } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./PageSizeSelect.css";

export function PageSizeSelect () :JSX.Element {
    return (
        <div className="page-size-select">
            <label 
                id="page-size-select__label" 
                className="page-size-select__label" 
                htmlFor="page-size-select__label"
            >
                Rows per page:
            </label>

            <select className="page-size-select__select">
                <option value="5">5</option>
            </select>

            <FontAwesomeIcon className='page-size-select__icon' icon={faChevronDown} />
        </div>
    )
}