import { Table, Popconfirm, Button } from 'antd';


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
        title: 'ISBN',
        dataIndex: 'ISBN',
        key: 'ISBN',
    },

]

const PublicacaoLista = ({lista, estaCarregando, excluir}) => {
    const colunas = [
        ...colunasDeDados,
        {
            title: 'Ações',
            dataIndex: '',
            key: 'x',
            render: (_, dado) => 
                <Popconfirm title="Tem Certeza que deseja Excluir?" onConfirm={() => excluir(dado.key)}>
                    <Button type='link'>Excluir</Button>
                </Popconfirm>
            
        }
    ]
    return (
            <Table columns={colunas} 
                   dataSource={lista} 
                   loading={estaCarregando}/>
    )
}
export default PublicacaoLista