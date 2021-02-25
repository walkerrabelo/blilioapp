import { useState } from 'react'
import PublicacaoNovaForm from "./components/PublicacaoNovaForm"
import PublicacaoLista from "./components/PublicacaoLista"

import { useCrud } from '../../hooks/useCrud'
import { Button } from 'antd'

const PublicacaoPage = () => {
    const [publicacoes, estaCarregando, operacoes] = useCrud('publicacoes')
    const [formularioVisivel, setFormularioVisivel] = useState(false)

    return (
        <section style={{padding: '10px'}}>
            <h2>Gerenciamento de Publicações</h2>
            <Button type="primary" onClick={()=>setFormularioVisivel(true)}>Adicionar Publicação</Button>
            {!formularioVisivel ? 
            (<PublicacaoLista publicacoes={publicacoes} 
                              estaCarregando={estaCarregando} 
                              excluir={operacoes.excluir}/> ): 
            (<PublicacaoNovaForm salvarPublicacao={operacoes.inserir} quandoFinalizar={()=>setFormularioVisivel(false)}/>)}
        </section>
    )
}

export default PublicacaoPage