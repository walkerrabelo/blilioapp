import { useEffect, useState } from 'react'

const useList = (service) => {
    const [dados, setDados] = useState([])
    const [carregando, setCarregando] = useState(true)
    useEffect(() => service().then((resposta) => {
        console.log('Calling useEffect...')
            setCarregando(false) 
            setDados(resposta.docs.map(dado => { return {id: dado.id, key: dado.id, ...dado.data() } }))
        }),
    [service])
    return [dados, carregando]
}

export default useList