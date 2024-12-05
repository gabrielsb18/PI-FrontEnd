import {ContainerProfile, ContentProfile, ProfileName, ProfileEmail, ProfileImage} from "./ButtonProfile.style";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import placeholderImageUser from "/placeHolder.webp"
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";

export function ButtonProfile(){
    const {nome, emailUser, avatar} = useAuth();

    const avatarUrl = avatar ? `${api.defaults.baseURL}/files/${avatar}` : placeholderImageUser;

    return (
        <ContainerProfile >

            <ContentProfile>
                <ProfileName>{nome}</ProfileName>
                <ProfileEmail>{emailUser}</ProfileEmail>
            </ContentProfile>

            <ProfileImage>
                <img src = {avatarUrl} alt = "Foto de perfil"/>
            </ProfileImage>

            <DropdownMenu />     
        </ContainerProfile>
    );
}   