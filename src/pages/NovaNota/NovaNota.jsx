import { ContainerBody, HeaderTitle, MainContent, InputWrapper, ButtonSaveNote, ButtonCancel, ContainerActionButtons} from '../NovaNota/NovaNota.styles';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function NovaNota() {
    const navigate = useNavigate();

    return (
        <ContainerBody>
            <Header />
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
                </InputWrapper>

                <ContainerActionButtons>
                    <ButtonSaveNote>Salvar</ButtonSaveNote>
                    <ButtonCancel>Cancelar</ButtonCancel>
                </ContainerActionButtons>

            </MainContent>
        </ContainerBody>
    );
}