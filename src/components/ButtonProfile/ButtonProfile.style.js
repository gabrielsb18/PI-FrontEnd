import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 4px;
  
  ${ContainerProfile}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
`;

export const ContentProfile = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
`;

export const ProfileName = styled.p`
    font-size: 13px;
    color: #FFFFFF;
    font-weight: 800;
`;

export const ProfileEmail = styled.p`
font-size: 13px;
    color: #FFFFFF;
    font-weight: 300;
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
        max-width: max-content;
        height: auto;
        width: 100%;
    }
`;