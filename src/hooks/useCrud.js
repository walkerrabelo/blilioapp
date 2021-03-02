import { useEffect, useState } from 'react'
import { criadorDeServices } from '../services/utils/service-utils'

const useCrud = (nomeDaColecao) => {
    const servico = criadorDeServices(nomeDaColecao)
    const [lista, setLista] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
            servico.lista()
                .then((resposta) => {
                        setCarregando(false) 
                        setLista(resposta.docs.map(dado => {
                             return {id: dado.id, key: dado.id, ...dado.data() } 
                        }))
                })
    }, [])

    const operacoes = {
        inserir: (dados) => servico.inserir(dados)
            .then(dado => setLista([...lista, {id: dado.id, key: dado.id, ...dados }])),

        excluir: null,
        atualizar: null,
        umRegistro: null,
    }

    return [lista, carregando, operacoes]
}

export default useCrud