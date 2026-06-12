import { PageSizeSelect } from "./PageSizeSelect/PageSizeSelect";
import { PaginationControls } from "./PaginationControls/PaginationControls";
import "./Pagination.css";

interface PaginationProps {
    setRowPerPage: (rowPerPage: number | null) => void;
    currentPage: number;
    handlePageChange: (currentPage: number) => void;
    totalPages: number;
}

export function Pagination ( { setRowPerPage, currentPage, handlePageChange, totalPages }: PaginationProps) {
    return (
        <div className="pagination">
            <PageSizeSelect handlePageChange={handlePageChange} setRowPerPage={setRowPerPage} />
            <PaginationControls currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
        </div>
    )
}