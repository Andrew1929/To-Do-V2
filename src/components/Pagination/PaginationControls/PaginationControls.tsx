import type { JSX } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./PaginationControls.css";

export function PaginationControls () :JSX.Element {
    return (
        <div className="pagination-controls">
            <button className="pagination-controls__button">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <span className="pagination-controls__page-number">1</span>
            <span className="pagination-controls__page-number">2</span>
            <span className="pagination-controls__page-number">3</span>
            
            <button className="pagination-controls__button">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}