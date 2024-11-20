import { LogoutButton } from "./Logout.style"
import { useAuth } from "../../contexts/AuthContext";

function AddTask(){
    const {signOut} = useAuth();

    return(
        <LogoutButton onClick={signOut} >
            <img src="../../public/logout.svg" />
        </LogoutButton>
    )
}

export default AddTask