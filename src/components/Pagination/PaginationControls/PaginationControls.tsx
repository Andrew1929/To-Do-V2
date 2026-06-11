import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./PaginationControls.css";

interface PaginationControlsProps {
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    totalPages: number;
}

const getPages = (currentPage: number, totalPages: number) : number[] => {
    const pages = [];

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return pages;
}

export function PaginationControls ({ currentPage, setCurrentPage, totalPages }: PaginationControlsProps) {
    return (
        <div className="pagination-controls">
            <button 
                className={`pagination-controls__button ${currentPage === 1 ? 'pagination-controls__button--disabled' : ''}`} 
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {getPages(currentPage, totalPages).map((page) => (
                <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`pagination-controls__button-page ${currentPage === page ? 'pagination-controls__button-page--active' : ''}`}
                >
                    {page}
                </button>
            ))}

            <button 
                className={`pagination-controls__button ${currentPage === totalPages ? 'pagination-controls__button--disabled' : ''}`} 
                onClick={() => setCurrentPage(currentPage + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}