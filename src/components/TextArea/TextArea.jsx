import { InputWrap, ErrorMessage } from "./TextArea.styles.js";
import React from "react";

const TextArea = React.forwardRef(({ error, nome, variant = "flat", ...rest },ref) => {
    return (
        <>
            <label>{nome}</label>
            <InputWrap variant={variant}>
                <textarea {...rest} ref={ref}/>
            </InputWrap>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    );
})

export {TextArea};