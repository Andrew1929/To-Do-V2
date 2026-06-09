import type { JSX } from "react";
import { Task } from "./Task/Task";
import type { Task as TaskType } from "../../types/task.types";
import "./TaskList.css";

type Props = {
    tasks: TaskType []
}

export function TaskList ({tasks}: Props) :JSX.Element {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}