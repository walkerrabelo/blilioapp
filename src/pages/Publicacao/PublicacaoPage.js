import PublicacaoForm from "./components/PublicacaoForm"
import PublicacaoLista from "./components/PublicacaoLista"
import useCrud from '../../hooks/useCrud'
import { useState } from "react"
import { Button } from "antd"

const PublicacaoPage = () => {
    const [publicacoes, estaCarregando, operacoes] = useCrud('publicacoes')
    const [formularioVisivel, setFormularioVisivel] = useState(false)

    return (
        <>
            <h1>Gerenciamento de Publicações</h1>
            <Button type={formularioVisivel ? "default" : "primary"} onClick={() => setFormularioVisivel(!formularioVisivel)}>
                {formularioVisivel ? '<< Voltar' : 'Nova Publicação'}
            </Button>

            {formularioVisivel ? 
                (
                    <PublicacaoForm inserirPublicacao={operacoes.inserir} aposInserir={() => setFormularioVisivel(false)}/>
                ) : (
                    <PublicacaoLista publicacoes={publicacoes} estaCarregando={estaCarregando} excluir={operacoes.excluir}/>
                )
            }
            
        </>
    )
}

export default PublicacaoPage