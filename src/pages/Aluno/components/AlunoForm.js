import { Form, Input, InputNumber, Button } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
}

const AlunoForm = ({aluno}) => {

    const onFinish = (data) => {
        console.log(data)
    }

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} >
            <Form.Item name='nome' label="Nome">
                <Input />
            </Form.Item>
            <Form.Item name='telefone' label="Telefone">
                <Input />
            </Form.Item>
            <Form.Item name='email' label="Email">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit"> Salvar </Button>
            </Form.Item>
        </Form>
    )
}

export default AlunoForm