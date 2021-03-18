import PublicacaoForm from "./components/PublicacaoForm"
import PublicacaoLista from "./components/PublicacaoLista"
import useCrud from '../../hooks/useCrud'
import { useEffect, useState } from "react"
import { Button } from "antd"

const PublicacaoPage = () => {
    const [publicacoes, estaCarregando, operacoes] = useCrud('publicacoes')
    const [formularioVisivel, setFormularioVisivel] = useState(false)
    const [publicacaoEmEdicao, setPublicacaoEmEdicao] = useState(undefined)

    const editar = (id) => {
        const publicacaoCarregada = publicacoes.find(p => p.id === id)
        setPublicacaoEmEdicao(publicacaoCarregada)
        setFormularioVisivel(true)
    }

    const salvar = (publicacao) => {
        if(publicacao.id) {
            operacoes.atualizar(publicacao)
            return
        }
        delete publicacao.id
        operacoes.inserir(publicacao)
    }

    useEffect(() => {
        if(!formularioVisivel)
            setPublicacaoEmEdicao(undefined)
    }, [formularioVisivel])

    return (
        <>
            <h1>Gerenciamento de Publicações</h1>
            <Button type={formularioVisivel ? "default" : "primary"} onClick={() => setFormularioVisivel(!formularioVisivel)}>
                {formularioVisivel ? '<< Voltar' : 'Nova Publicação'}
            </Button>

            {formularioVisivel ? 
                (
                    <PublicacaoForm publicacao={publicacaoEmEdicao} salvarPublicacao={salvar} aposInserir={() => setFormularioVisivel(false)}/>
                ) : (
                    <PublicacaoLista editar={editar} publicacoes={publicacoes} estaCarregando={estaCarregando} excluir={operacoes.excluir}/>
                )
            }
            
        </>
    )
}

export default PublicacaoPage