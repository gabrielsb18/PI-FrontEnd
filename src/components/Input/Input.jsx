/* eslint-disable react/prop-types */
import { InputWrap, ErrorMessage } from "./Input.styles";
import React from "react";

const Input = React.forwardRef(({ error, nome, icon:Icon, ...rest },ref) => {
    return (
        <>
            <label>{nome}</label>
            <InputWrap>
                {Icon && <Icon size={20} />}
                <input {...rest} ref={ref}/>
            </InputWrap>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    );
})

export {Input};