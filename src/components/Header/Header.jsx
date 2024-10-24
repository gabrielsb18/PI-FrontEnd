import { ButtonProfile } from "../ButtonProfile/ButtonProfile";
import { Header } from "./Header.style";

export default function HeaderNav() {
    return (
        <Header>
            <img src="/IconLogo.svg" alt="Logo Notes" />

            <ButtonProfile/>
        </Header>
    )
}
