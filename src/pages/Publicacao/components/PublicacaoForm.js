import { Form, Input, Button } from 'antd'
import { useEffect } from 'react'

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
const PublicacaoForm = ({publicacao, salvarPublicacao, aposInserir}) => {

    const [formulario] = Form.useForm()

    useEffect(() => { formulario.setFieldsValue(publicacao) }, [publicacao]) // eslint-disable-line react-hooks/exhaustive-deps

    const quandoFinalizar = (dados) => {
        salvarPublicacao(dados)
        aposInserir()
    }

    return (
        <>
            <h3>{ publicacao ? `Editando ${publicacao.titulo}` : 'Nova Publicação' }</h3>
            <Form form={formulario} {...layout} onFinish={quandoFinalizar}>
                <Form.Item name="id">
                    <Input type="hidden" />
                </Form.Item>
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