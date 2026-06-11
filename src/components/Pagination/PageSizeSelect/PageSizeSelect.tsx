import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./PageSizeSelect.css";

interface PageSizeSelectProps {
    handlePageChange: (currentPage: number) => void;
    setRowPerPage: (rowPerPage: number | null) => void;
}

export function PageSizeSelect ({ handlePageChange, setRowPerPage }: PageSizeSelectProps) {
    return (
        <div className="page-size-select">
            <label 
                id="page-size-select__label" 
                className="page-size-select__label" 
                htmlFor="page-size-select__label"
            >
                Rows per page:
            </label>

            <select 
                className="page-size-select__select" 
                defaultValue="10"
                onChange={(e) => {
                    setRowPerPage(e.target.value === "All" ? null : Number(e.target.value));
                    handlePageChange(1);
                }}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="All">All</option>
            </select>

            <FontAwesomeIcon className='page-size-select__icon' icon={faChevronDown} />
        </div>
    )
}