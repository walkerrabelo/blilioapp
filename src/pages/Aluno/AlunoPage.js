
import useList from '../../hooks/useList'
import { listaDeAlunos } from '../../services/aluno.service'
import { AlunoLista } from './components/AlunoLista'

const AlunoPage = () => {
    //const [alunos, estaCarregando] = useList(listaDeAlunos)   
    return (
        <>
            <h1>Gerenciador de Alunos</h1>
            
            {/* <AlunoLista alunos={alunos} estaCarregando={estaCarregando}/> */}
        </>
    )
}

export default AlunoPage