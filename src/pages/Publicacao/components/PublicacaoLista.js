import { Button, Table } from 'antd';

const colunasIniciais = [
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
    }
]

const PublicacaoLista = ({publicacoes, estaCarregando, excluir}) => {

    const colunas = [
        ...colunasIniciais,
        {
            title: 'Ações',
            dataIndex: 'acoes',
            key: 'acoes',
            render: (_, publicacao) => 
                <Button type='link' onClick={() => excluir(publicacao.key)}>Excluir</Button>
        }
    ]

    return (
        <Table columns={colunas} 
               dataSource={publicacoes} 
               loading={estaCarregando}/>
    )
}
    
export default PublicacaoLista