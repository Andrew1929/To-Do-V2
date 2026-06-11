import { SortSelect } from './SortSelect/SortSelect';
import { ViewSelect } from './ViewSelect/ViewSelect';
import './ToolBar.css';

interface ToolBarProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    viewBy: string;
    setViewBy: (viewBy: string) => void;
}

export function ToolBar({ sortBy, setSortBy, viewBy, setViewBy }: ToolBarProps) {
    return (
        <div className="tool-bar">
            <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
            <ViewSelect viewBy={viewBy} setViewBy={setViewBy} />
        </div>
    )
}