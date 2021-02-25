
import PublicacaoForm from "./components/PublicacaoForm"
import PublicacaoLista from "./components/PublicacaoLista"

import { useCrud } from '../../hooks/useCrud'

const PublicacaoPage = () => {
    const [publicacoes, estaCarregando, operacoes] = useCrud('publicacoes')
    return (
        <section style={{padding: '10px'}}>
            <h2>Gerenciamento de Publicações</h2>
            <PublicacaoLista publicacoes={publicacoes} 
                             estaCarregando={estaCarregando} 
                             excluir={operacoes.excluir}/>
            <PublicacaoForm/>
        </section>
    )
}

export default PublicacaoPage