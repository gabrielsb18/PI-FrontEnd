import styled from "styled-components";

export const ContainerProfile = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 12px;

    border-radius: 8px;
    padding: 0 14px;

    border: 1px solid transparent;
    cursor: pointer;

    transition: ease-out 0.2s;
    background-color: transparent;

    &:hover {
        border-color: #666;
    }
`;

export const ContentProfile = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
`;

export const ProfileName = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 800;
`;

export const ProfileEmail = styled.p`
font-size: 12px;
    color: #FFFFFF;
    font-weight: 500;
`;

export const ProfileImage = styled.div`
    display: flex;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 100%;
    }
`;