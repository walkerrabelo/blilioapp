
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import useCrud from '../../hooks/useCrud'
import AlunoForm from './components/AlunoForm'
import { AlunoLista } from './components/AlunoLista'

const AlunoPage = () => {
    const [alunos, estaCarregando, operacoes] = useCrud('alunos')
    const [formularioVisivel, setFormularioVisivel] = useState(false)
    const [alunoEmEdicao, setAlunoEmEdicao] = useState(undefined)

    const editar = (id) => {
        const alunoCarregado = alunos.find(a => a.id === id)
        setAlunoEmEdicao(alunoCarregado)
        setFormularioVisivel(true)
    }

    const salvar = (aluno) => {
        if(aluno.id) {
            operacoes.atualizar(aluno)
            return
        }
        delete aluno.id
        operacoes.inserir(aluno)
    }

    useEffect(() => {
        if(!formularioVisivel)
            setAlunoEmEdicao(undefined)
    }, [formularioVisivel])

    return (
        <>
            <h1>Gerenciamento de Alunos</h1>
            <Button type={formularioVisivel ? "default" : "primary"} onClick={() => setFormularioVisivel(!formularioVisivel)}>
                {formularioVisivel ? '<< Voltar' : 'Novo Aluno'}
            </Button>

            {formularioVisivel ? 
                (
                    <AlunoForm aluno={alunoEmEdicao} salvarAluno={salvar} aposInserir={() => setFormularioVisivel(false)}/>
                ) : (
                    <AlunoLista editar={editar} alunos={alunos} estaCarregando={estaCarregando} excluir={operacoes.excluir}/>
                )
            }
            
        </>
    )
}

export default AlunoPage