import { SortSelect } from './SortSelect/SortSelect';
import { ViewSelect } from './ViewSelect/ViewSelect';
import type { JSX } from 'react';

import './ToolBar.css';

export function ToolBar() : JSX.Element {
    return (
        <div className="tool-bar">
            <SortSelect />
            <ViewSelect />
        </div>
    )
}