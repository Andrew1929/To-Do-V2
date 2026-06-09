import type { JSX } from "react";
import { PageSizeSelect } from "./PageSizeSelect/PageSizeSelect";
import { PaginationControls } from "./PaginationControls/PaginationControls";

import "./Pagination.css";

export function Pagination () :JSX.Element {
    return (
        <div className="pagination">
            <PageSizeSelect />
            <PaginationControls />
        </div>
    )
}