import { Button } from "./AddTask.style";
import { Link } from "react-router-dom";

function AddTask(){
    return(
        <Link to="/novanota">
            <Button>
                Nova Tarefa
            </Button>
        </Link>
    )
}

export default AddTask;