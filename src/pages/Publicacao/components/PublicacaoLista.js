import { Table, Popconfirm } from 'antd';


const colunasDeDados = [
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

const PublicacaoLista = ({publicacoes, estaCarregando, excluir}) => {
    const colunas = [
        ...colunasDeDados,
        {
            title: 'Ações',
            dataIndex: '',
            key: 'x',
            render: (_, dado) => 
                <Popconfirm title="Tem Certeza que deseja Excluir?" onConfirm={() => excluir(dado.key)}>
                    <a>Excluir</a>
                </Popconfirm>
            
        }
    ]
    return (
            <Table columns={colunas} 
                dataSource={publicacoes} 
                loading={estaCarregando}/>
    )
}
export default PublicacaoLista