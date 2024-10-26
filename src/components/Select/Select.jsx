import { ButtonSelect } from "./Select.style"

function SelectButton(){
    return(
        <ButtonSelect>
            <select>
                <option>Todas</option> 
                <option>Concluídas</option>
                <option>Pendentes</option>
            </select>
            <img src="/Icon-Arrow.svg" alt="Seta"/>
        </ButtonSelect>
      )
}

export default SelectButton;