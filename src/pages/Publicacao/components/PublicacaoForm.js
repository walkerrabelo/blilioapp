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
const PublicacaoForm = ({inserirPublicacao, aposInserir}) => {


    const quandoFinalizar = (dados) => {
        inserirPublicacao(dados)
        aposInserir()
    }

    return (
        <>
            <h3>Nova Publicação</h3>
            <Form {...layout} onFinish={quandoFinalizar}>
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
        </>
    )
}

export default PublicacaoForm