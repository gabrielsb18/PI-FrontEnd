import { ButtonSelect } from "./Select.style";

function SelectButton({ filter, setFilter }){
    return(
        <ButtonSelect>
            <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            >
                <option value="todas">Todas</option> 
                <option value="concluida">Concluídas</option>
                <option value="pendente">Pendentes</option>
            </select>
            <img src="/Icon-Arrow.svg" alt="Seta"/>
        </ButtonSelect>
      )
}

export { SelectButton };