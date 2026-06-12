import type { Task as TaskType } from "../../types/task.types";

import { Task } from "./Task/Task";
import "./TaskList.css";

type Props = {
    tasks: TaskType []
}

export function TaskList ({tasks}: Props) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}