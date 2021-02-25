import { Layout, Typography} from 'antd';

const Header = ({tituloLongo, tituloCurto}) => 
    <Layout.Header>
        <Typography.Title level={2} style={{color: '#FFFFFF'}}>{tituloLongo}</Typography.Title>
    </Layout.Header>

export default Header