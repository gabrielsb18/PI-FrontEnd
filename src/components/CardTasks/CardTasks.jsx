import {CardTasks} from "./CardTasks.style.js";

export function CardTask({title, description, onClick, status}) {
    return (
        <CardTasks status={status} onClick={onClick}>
            <h1>{title}</h1>
            <p>{description}</p>
        </CardTasks>
    );
};