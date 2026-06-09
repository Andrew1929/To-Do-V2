import type { JSX } from "react"
import type { Task } from "../../types/task.types"

import {TaskInfo} from "./TaskInfo/TaskInfo"
import { Logo } from "./Logo/Logo"
import { AddTaskButton } from "./AddTaskButton/AddTaskButton"
import "./Header.css"

type Props = {
    tasks: Task []
}

export function Header ({ tasks }: Props) :JSX.Element {
    return (
        <header className="header">
            <Logo/>
            <TaskInfo tasks={tasks}/>
            <AddTaskButton/>
        </header>
    )
}