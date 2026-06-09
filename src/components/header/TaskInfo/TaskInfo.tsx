import {type JSX } from "react"

import type { Task } from "../../../types/task.types";
import "./TaskInfo.css"

type Props = {
    tasks: Task []
}

export function TaskInfo( { tasks }: Props ) :JSX.Element {
    return (
        <div className="task-info">
            <p className="task-info__title">All Tasks</p>

            <p className="task-info__counts">{tasks.length} tasks</p>
        </div>
    )
}