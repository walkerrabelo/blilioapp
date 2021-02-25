import { db } from '../../firebase.config'

export const criadorDeServices = (collectionName) => {
    const colecao = db.collection(collectionName)
    return {
        listar     : (     ) => colecao.get(),
        umRegistro : (id   ) => colecao.doc(id).get(),
        inserir    : (dados) => colecao.add(dados),
        atualizar  : (dados) => { 
            const id = dados.id
            delete dados.id
            colecao.doc(id).update(dados)
        },
        excluir    : (id   ) => colecao.doc(id).delete(),
    }
}