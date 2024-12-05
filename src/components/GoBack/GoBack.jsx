import { Button } from "./GoBack.style"

function GoBack({...rest}){
    return(
        <Button {...rest}>
            Voltar para a tela inicial
        </Button>
    )
}

export default GoBack;