import { LogoutButton } from "./Logout.style"
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AddTask(){
    const {signOut} = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        signOut();
        navigate("/login");
    }

    return(
        <LogoutButton onClick={handleClick} >
            <img src="../../public/logout.svg" />
        </LogoutButton>
    )
}

export default AddTask