import { useState } from "react";
import type { Task } from "../types/task.types";

export function usePagination(viewFilteredTasks: Task[]) {
    const [rowPerPage, setRowPerPage] = useState<number | null>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(viewFilteredTasks.length / (rowPerPage || viewFilteredTasks.length));

    const handlePageChange = (currentPage: number) => {
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        setCurrentPage(currentPage);
    };

    const getCurrentPageTasks = (currentPage: number, rowPerPage: number | null) => {
        const startIndex = (currentPage - 1) * (rowPerPage || viewFilteredTasks.length);
        const endIndex = startIndex + (rowPerPage || viewFilteredTasks.length);
        return viewFilteredTasks.slice(startIndex, endIndex);
    }

    return {totalPages, handlePageChange, getCurrentPageTasks , currentPage, setRowPerPage , rowPerPage};
}