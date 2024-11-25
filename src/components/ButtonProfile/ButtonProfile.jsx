import {ContainerProfile, ContentProfile, ProfileName, ProfileEmail, ProfileImage} from "./ButtonProfile.style";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
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

            <DropdownMenu />     
        </ContainerProfile>
    );
}   