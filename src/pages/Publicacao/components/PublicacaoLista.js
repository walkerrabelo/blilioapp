import { Button, Popconfirm, Table } from 'antd';

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

const PublicacaoLista = ({publicacoes, estaCarregando, editar, excluir}) => {

    const colunas = [
        ...colunasIniciais,
        {
            title: 'Ações',
            dataIndex: 'acoes',
            key: 'acoes',
            render: (_, publicacao) => 
                <div>
                    <Popconfirm title="Você realmente deseja excluir ?" onConfirm={() => excluir(publicacao.key)}>
                        <Button type='link'>Excluir</Button>
                    </Popconfirm>
                    <Button type='link' onClick={() => editar(publicacao.key)}>Editar</Button>
                </div>
        }
    ]

    return (
        <Table columns={colunas} 
               dataSource={publicacoes} 
               loading={estaCarregando}/>
    )
}
    
export default PublicacaoLista