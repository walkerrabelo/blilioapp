import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import Header from '../layout/Header';
import AlunoPage from './Aluno/AlunoPage';
import PublicacaoPage from './Publicacao/PublicacaoPage';

const { TabPane } = Tabs;

function BiblioAppHome() {
  return (
    <>
      <Header tituloLongo='BiblioApp' tituloCurto='BMC'/>
      <section style={{padding: '10px'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab='Publicações' key='1'>
            <PublicacaoPage/>
          </TabPane>
          <TabPane tab='Alunos' key='3'>
            <AlunoPage/>
          </TabPane>
          <TabPane tab='Empréstimos' key='2'>
            Gerenciador de Empréstimos
          </TabPane>
        </Tabs>
      </section>
    </>
  );
}

export default BiblioAppHome;
