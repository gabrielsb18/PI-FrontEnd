import {ContainerProfile, ContentProfile, ProfileName, ProfileEmail, ProfileImage, DropdownContent, DropdownItem} from "./ButtonProfile.style";
import { useAuth } from "../../contexts/AuthContext";

export function ButtonProfile(){
    const {nome, emailUser, signOut} = useAuth();

    return (
        <ContainerProfile >

            <ContentProfile>
                <ProfileName>{nome}</ProfileName>
                <ProfileEmail>{emailUser}</ProfileEmail>
            </ContentProfile>

            <ProfileImage>
                <img src = "/IconProfile.svg" alt = "Foto de perfil"/>
            </ProfileImage>

            <DropdownContent>
                <DropdownItem to={"/perfil"}>Conta</DropdownItem>
                <DropdownItem to={"/login"} onClick={()=> signOut()}>Sair</DropdownItem>
            </DropdownContent>
        </ContainerProfile>
    );
}