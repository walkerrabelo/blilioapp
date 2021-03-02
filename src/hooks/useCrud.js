import { useEffect, useState } from 'react'
import { criadorDeServices } from '../services/utils/service-utils'

export function  useCrud (nomeEntidade) {
    const [lista, setLista] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    const servico = criadorDeServices(nomeEntidade)

    useEffect(() => { 
        criadorDeServices(nomeEntidade).listar().then((resposta) => {
            console.log('useEffect...')
            setEstaCarregando(false) 
            setLista(resposta.docs.map(dado => { return {id: dado.id, key: dado.id, ...dado.data() } }))
        })
    }, [nomeEntidade])
    
    const operacoes = {
        inserir: (dados) => servico.inserir(dados).then(doc => setLista([...lista, {key: doc.id, id: doc.id,...dados}])),
        excluir: (id) => servico.excluir(id).then(() => setLista(lista.filter(dado => dado.id !== id))),
        atualizar: (dados) => servico.atualizar(dados).then(() => setLista([...lista.filter(dado => dado.id !== dados.id), dados])),
        umRegistro: (id) => servico.umRegistro(id).then(doc => setLista([...lista, {key: doc.id, id: doc.id,...doc.data()}])),
    }

    return [lista, estaCarregando, operacoes]
}