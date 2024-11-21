import {ContainerProfile, ContentProfile, ProfileName, ProfileEmail, ProfileImage, DropdownContent, DropdownItem} from "./ButtonProfile.style";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function ButtonProfile(){
    const navigate = useNavigate();
    const {nome, emailUser} = useAuth();

    return (
        <ContainerProfile onClick={()=> navigate("/perfil")}>

            <ContentProfile>
                <ProfileName>{nome}</ProfileName>
                <ProfileEmail>{emailUser}</ProfileEmail>
            </ContentProfile>

            <ProfileImage>
                <img src = "/IconProfile.svg" alt = "Foto de perfil"/>
            </ProfileImage>

            {/* <DropdownContent>
                <DropdownItem href="#">Opção</DropdownItem>
                <DropdownItem href="#">Opção 2</DropdownItem>
                <DropdownItem href="#">Opção 3</DropdownItem>
            </DropdownContent> */}
        </ContainerProfile>
    );
}