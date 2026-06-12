import type { Task } from "../../../types/task.types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import "./Task.css";

type Props = {
    task: Task
}

export function Task ({task}: Props) {

    const getUser = (userId: number) : string => {
        switch (userId) {
            case 1:
                return "task__user-icon--green"; 
            case 2:
                return "task__user-icon--blue";
            case 3:
                return "task__user-icon--yellow";
            case 4:
                return "task__user-icon--purple";
            case 5:
                return "task__user-icon--orange";       
            case 6:
                return "task__user-icon--red";
            case 7:
                return "task__user-icon--pink";
            case 8:
                return "task__user-icon--cyan";
            case 9:
                return "task__user-icon--brown";
            case 10:
                return "task__user-icon--gray";
            default:
                return "task__user-icon--black";
        }
    };

    return (
        
        <div className="task">
            <input 
                className="task__checkbox" 
                type="checkbox"
                checked = {task.completed}
                onChange= {() => task.completed = !task.completed}
            />
        
            <p className={`task__title ${task.completed ? "task__title--completed" : ""}`}>
                {task.title}
            </p>

            <span className="task__user">
                <p className="task__user-title">user : </p>

                <FontAwesomeIcon className={`task__user-icon ${getUser(task.userId)}`} icon={faSquare} />
            </span>
        </div>
        
    ) 
}