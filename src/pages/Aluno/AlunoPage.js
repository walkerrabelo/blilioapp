
import useCrud from '../../hooks/useCrud'
import AlunoForm from './components/AlunoForm'
import { AlunoLista } from './components/AlunoLista'

const AlunoPage = () => {
    const [alunos, estaCarregando, operacoes] = useCrud('alunos')   
    return (
        <>
            <h1>Gerenciador Novo de Alunos</h1>
            <AlunoLista alunos={alunos} estaCarregando={estaCarregando}/>
            <AlunoForm inserirAluno={operacoes.inserir}/>
        </>
    )
}

export default AlunoPage