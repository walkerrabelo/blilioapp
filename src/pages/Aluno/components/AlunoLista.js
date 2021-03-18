import { Button, Popconfirm, Table } from 'antd';
const colunasIniciais = [
    { title: 'Nome', dataIndex: 'nome', key: 'nome' },
    { title: 'Telefone', dataIndex: 'telefone', key: 'telefone' },
    { title: 'Email', dataIndex: 'email', key: 'email' }
]
export const AlunoLista = ({alunos, estaCarregando, editar, excluir}) => {
    
    const colunas = [
        ...colunasIniciais,
        {
            title: 'Ações',
            dataIndex: 'acoes',
            key: 'acoes',
            render: (_, aluno) => 
                <>
                    <Popconfirm title="Você realmente deseja excluir ?" onConfirm={() => excluir(aluno.key)}>
                        <Button type='link'>Excluir</Button>
                    </Popconfirm>
                    <Button type='link' onClick={() => editar(aluno.key)}>Editar</Button>
                </>
        }
    ]

    return (
        <Table columns={colunas} dataSource={alunos} loading={estaCarregando}/>
    )
}
    