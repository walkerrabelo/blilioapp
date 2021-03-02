import PublicacaoForm from "./components/PublicacaoForm"
import PublicacaoLista from "./components/PublicacaoLista"
import useCrud from '../../hooks/useCrud'

const PublicacaoPage = () => {
    const [publicacoes, estaCarregando, operacoes] = useCrud('publicacoes')
    return (
        <>
            <h1>Gerenciamento de Publicações</h1>
            <PublicacaoLista publicacoes={publicacoes} estaCarregando={estaCarregando}/>
            <PublicacaoForm inserirPublicacao={operacoes.inserir}/>
        </>
    )
}

export default PublicacaoPage