import { Layout, Typography} from 'antd';

const Header = ({tituloLongo, tituloCurto}) => 
    <Layout.Header>
        <Typography.Title level={2} style={{color: '#FFFFFF'}}>{tituloCurto}</Typography.Title>
    </Layout.Header>

export default Header