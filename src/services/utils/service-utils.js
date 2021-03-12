import { db } from '../../firebase.config'

export const criadorDeServices = (collectionName) => {
    const colecao = db.collection(collectionName)
    return {
        lista      : (    ) => colecao.get(),
        umRegistro : (id  ) => colecao.doc(id).get(),
        inserir    : (dados) => colecao.add(dados),
        atualizar  : (dados) => null,
        remover    : (dados) => null
    }
}