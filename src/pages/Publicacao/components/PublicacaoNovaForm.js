import { Form, Input, Button } from 'antd'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
}
const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 12,
    },
  }
const PublicacaoNovaForm = ({salvar, quandoFinalizar}) => {
    return (
        <section style={{padding: '20px'}}>
            <h3 style={{marginBottom: '20px'}}>Insira os dados para a Nova Publicação</h3>
            <Form {...layout} onFinish={(dados)=>{
                salvar(dados)
                quandoFinalizar()
            }}>
                <Form.Item label="ISBN" name="ISBN">
                    <Input />
                </Form.Item>
                <Form.Item label="Título" name="titulo">
                    <Input />
                </Form.Item>
                <Form.Item label="Autor" name="autor">
                    <Input />
                </Form.Item>
                <Form.Item label="Edição" name="edicao">
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>
                </Form.Item>
            </Form>
        </section>
    )
}

export default PublicacaoNovaForm