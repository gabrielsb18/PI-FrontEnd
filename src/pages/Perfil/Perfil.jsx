import HeaderNav from "../../components/Header/Header";
import { Input } from "../../components/Input/Input.jsx";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FiCamera, FiUser } from "react-icons/fi";

import {
	ContainerBody,
	Main,
	FormContainer,
	ButtonSave,
    Avatar,
    InputsWrapper,
} from "./Perfil.style.js";

export default function Perfil({}) {
	return (
		<ContainerBody>
			<HeaderNav
                showSearchBar={false}
            />
			<Main>
                <Avatar>
				    <img src="/IconProfile.svg" alt="Profile Image" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <FormContainer>
                    <InputsWrapper>
                        <Input
                            variant="black"
                            placeholder="nome"
                            icon={FiUser}
                        />

                        <Input
                            variant="black"
                            placeholder="email"
                            icon={MdOutlineEmail}
                        />

                    </InputsWrapper>
                    <InputsWrapper>

                        <Input
                            variant="black"
                            type="password"
                            placeholder="senha"
                            icon={MdOutlineLock}
                        />

                        <Input
                            variant="black"
                            type="password"
                            placeholder="senha"
                            icon={MdOutlineLock}
                        />
                    </InputsWrapper>
                    
                    <ButtonSave type="submit">Salvar</ButtonSave>
                </FormContainer>

			</Main>
		</ContainerBody>
	);
}
