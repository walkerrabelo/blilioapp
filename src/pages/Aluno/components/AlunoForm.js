import { Form, Input, Button } from 'antd'
import { useEffect } from 'react'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
}

const AlunoForm = ({aluno, salvarAluno, aposInserir}) => {
    
    const [formulario] = Form.useForm()

    useEffect(() => { formulario.setFieldsValue(aluno) }, [aluno]) // eslint-disable-line react-hooks/exhaustive-deps

    const quandoFinalizar = (dados) => {
        salvarAluno(dados)
        aposInserir()
    }

    return (
        <>
            <h3>{ aluno ? `Editando ${aluno.nome}` : 'Novo Aluno' }</h3>
            <Form form={formulario} {...layout} name="nest-messages" onFinish={quandoFinalizar} >
                <Form.Item name="id">
                    <Input type="hidden" />
                </Form.Item>
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
        </>
    )
}

export default AlunoForm