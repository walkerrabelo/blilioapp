import { useState } from 'react'
import { useCrud } from '../hooks/useCrud'
import { Button } from 'antd'

const withCrud = (Lista, Formulario, entidadeProps) => {
    const WithCrud = props => {
        const [lista, estaCarregando, operacoes] = useCrud(entidadeProps.colecao)
        const [formularioVisivel, setFormularioVisivel] = useState(false)
        return (
            <section style={{padding: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <h2>{entidadeProps.descricao}</h2>
                    <Button type="primary"
                            onClick={()=>setFormularioVisivel(!formularioVisivel)}>
                        {formularioVisivel ? '< Retornar' : `+ Inserir ${entidadeProps.titulo}`}
                    </Button>
                </div>
                {!formularioVisivel ? 
                (<Lista lista={lista} 
                        estaCarregando={estaCarregando} 
                        excluir={operacoes.excluir}/> ): 
                (<Formulario salvar={operacoes.inserir} 
                             quandoFinalizar={()=>setFormularioVisivel(false)}/>)}
            </section>
        )
    }
    return WithCrud
}

export default withCrud