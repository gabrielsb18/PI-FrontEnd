import styled from "styled-components";
import { ContainerProfile } from "../ButtonProfile/ButtonProfile.style";
import { Link } from "react-router-dom";

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    background-color: #3B3B3B;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 4px;
    width: 50%;
  
    ${ContainerProfile}:focus &, ${ContainerProfile}:hover & {
        display: flex;
        flex-direction: column;
    }
`;

export const DropdownItem = styled(Link)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    
    color: white;
    font-size: 14px;
    font-weight: 600;
    
    &:hover {
        background-color: #7B7B7B;
        border-radius: 4px;
    }
`;