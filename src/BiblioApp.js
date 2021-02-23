import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import Header from './layout/Header';


const { TabPane } = Tabs;

function BiblioApp() {
  return (
    <>
      <Header tituloLongo='Biblioteca Matilde Carvalho' tituloCurto='BMC'/>
      <Tabs defaultActiveKey="1">
        <TabPane tab='Empréstimos' key='1'>
          Gerenciador de Empréstimos
        </TabPane>
        <TabPane tab='Livros' key='2'>
          Gerenciador de Livros
        </TabPane>
        <TabPane tab='Alunos' key='3'>
          Gerenciador de Alunos
        </TabPane>
      </Tabs>
    </>
  );
}

export default BiblioApp;
