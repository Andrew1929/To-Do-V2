import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import "./Logo.css";


export function Logo () :JSX.Element {
    return (
        <div className="logo">
            <FontAwesomeIcon className="logo__icon" icon={faSquareCheck} />

            <h1 className="logo__text">To Do</h1>
        </div>
    )
}