/* eslint-disable react/prop-types */
import { InputWrap } from "./Input.styles";

export default function Input({ nome, icon:Icon, ...rest }) {
    return (
        <>
            <label>{nome}</label>
            <InputWrap>
                {Icon && <Icon size={20} />}
                <input {...rest}/>
            </InputWrap>
        </>
    );
}

