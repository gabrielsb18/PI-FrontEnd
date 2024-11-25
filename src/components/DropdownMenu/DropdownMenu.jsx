import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { DropdownContent, DropdownItem } from "./DropdownMenu.style";
import { useAuth } from "../../contexts/AuthContext";

export function DropdownMenuItem({ icon: Icon, children, ...rest }) {
	return (
		<DropdownItem {...rest}>
			{Icon && <Icon size={20} />}
			{children}
		</DropdownItem>
	);
}

export default function DropdownMenu() {
	const { signOut } = useAuth();

	return (
		<DropdownContent>
			<DropdownMenuItem icon={FiUser} to={"/perfil"}>
				Perfil
			</DropdownMenuItem>

			<DropdownMenuItem
				icon={MdLogout}
				to={"/login"}
				onClick={() => signOut()}
			>
				Sair
			</DropdownMenuItem>
		</DropdownContent>
	);
}
