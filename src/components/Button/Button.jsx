import { ConteinerButton } from "./Button.styles"

/* eslint-disable react/prop-types */
function Button ({estilo="flat", name}) {
    return (
        <ConteinerButton className={estilo}>
            {name}
        </ConteinerButton>
    );
}

export default Button