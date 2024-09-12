/* eslint-disable react/prop-types */
import { InputWrap } from "./Input.styles";

export default function Input({ nome, ...rest }) {
    return (
        <>
            <label>{nome}</label>
            <InputWrap>
                <input {...rest}/>
            </InputWrap>
        </>
    );
}

