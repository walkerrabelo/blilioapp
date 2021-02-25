import { useEffect, useState } from 'react'

const useList = (service) => {
    const [dados, setDados] = useState([])
    const [carregando, setCarregando] = useState(true)
    useEffect(() => service().then((resposta) => {
            setCarregando(false) 
            setDados(resposta.docs.map(dado => { return {id: dado.id, key: dado.id, ...dado.data() } }))
        }),
    [])
    return [dados, carregando]
}

export default useList