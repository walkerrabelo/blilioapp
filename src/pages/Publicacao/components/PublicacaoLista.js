import useList from '../../../hooks/useList'
import { listaDePublicacoes } from '../../../services/publicacao.service'
import { Table } from 'antd';


const colunas = [
    {
        title: 'Título',
        dataIndex: 'titulo',
        key: 'titulo',
    },
    {
        title: 'Autor',
        dataIndex: 'autor',
        key: 'autor',
    },
    {
        title: 'Edição',
        dataIndex: 'edicao',
        key: 'edicao',
    },
    {
        title: 'ISBN',
        dataIndex: 'ISBN',
        key: 'ISBN',
    },
]

const PublicacaoLista = () => {

    const [publicacoes, estaCarregando] = useList(listaDePublicacoes)

    return (
        <Table columns={colunas} 
               dataSource={publicacoes} 
               loading={estaCarregando}/>
    )
}
    
export default PublicacaoLista