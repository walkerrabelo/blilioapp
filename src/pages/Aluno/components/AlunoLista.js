import { Table } from 'antd';
const colunas = [
    { title: 'Nome', dataIndex: 'nome', key: 'nome' },
    { title: 'Telefone', dataIndex: 'telefone', key: 'telefone' },
    { title: 'Email', dataIndex: 'email', key: 'email' }
]
export const AlunoLista = ({alunos, estaCarregando}) => 
    <Table columns={colunas} dataSource={alunos} loading={estaCarregando}/>