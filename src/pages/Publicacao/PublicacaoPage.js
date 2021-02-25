import PublicacaoForm from "./components/PublicacaoForm"
import PublicacaoLista from "./components/PublicacaoLista"

const PublicacaoPage = () => {
    return (
        <>
            <h1>Gerenciamento de Publicações</h1>
            <PublicacaoLista/>
            <PublicacaoForm/>
        </>
    )
}

export default PublicacaoPage