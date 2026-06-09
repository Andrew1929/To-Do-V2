import type { JSX } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddTaskButton.css"

export function AddTaskButton () : JSX.Element {
    return (
        <button className="add-task-button" aria-label="Add task">
            <FontAwesomeIcon className="add-task-button__icon" icon={faPlus} />

            <span className="add-task-button__text">Add Task</span>
        </button>
    )
}