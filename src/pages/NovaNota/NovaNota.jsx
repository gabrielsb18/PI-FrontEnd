import { ContainerBody, Title, DeleteButton, MainContent,InputWrapper, Salvar } from '../NovaNota/NovaNota.styles'
import { useNavigate } from 'react-router-dom';

export default function NovaNota() {
    const navigate = useNavigate();

    return (
        <ContainerBody>
            <MainContent>
                <HeaderTitle>
                    <h1>Nova Tarefa</h1>
                </HeaderTitle>
                <InputWrapper>
                    <label>Título</label>
                    <input placeholder='Digite o título'/>
                </InputWrapper>
                <InputWrapper>
                    <label>Conteúdo</label>
                    <textarea placeholder='Digite o conteúdo'/>
                <Salvar>
                    <button>Salvar</button>
                </Salvar>
                </InputWrapper>

                <ContainerActionButtons>
                    <ButtonSaveNote>Salvar</ButtonSaveNote>
                    <ButtonCancel>Cancelar</ButtonCancel>
                </ContainerActionButtons>
            </MainContent>
        </ContainerBody>
    );
}