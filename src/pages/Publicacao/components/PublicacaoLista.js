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

const PublicacaoLista = ({publicacoes, estaCarregando}) => {
    return (
        <Table columns={colunas} 
               dataSource={publicacoes} 
               loading={estaCarregando}/>
    )
}
    
export default PublicacaoLista