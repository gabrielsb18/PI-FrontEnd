import {ContainerProfile, ContentProfile, ProfileName, ProfileEmail, ProfileImage } from "./ButtonProfile.style";

export function ButtonProfile(){
    return (
        <ContainerProfile>

            <ContentProfile>
                <ProfileName>Rodrigo</ProfileName>
                <ProfileEmail>odigo@gmail.com</ProfileEmail>
            </ContentProfile>

            <ProfileImage>
                <img src = "/IconProfile.svg" alt = "Foto de perfil"/>
            </ProfileImage>
            
        </ContainerProfile>
    );
}