import { CardTasks} from "./CardTasks.styles.js";

export function CardTask({title, description, onClick}) {
    return (
        <CardTasks onClick={onClick}>
            <h1>{title}</h1>
            <p>{description}</p>
        </CardTasks>
    );
};