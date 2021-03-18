import { db } from '../../firebase.config'

export const criadorDeServices = (collectionName) => {
    const colecao = db.collection(collectionName)
    return {
        lista      : (    ) => colecao.get(),
        umRegistro : (id  ) => colecao.doc(id).get(),
        inserir    : (dados) => colecao.add(dados),
        atualizar  : (dados) => {
            const id = dados.id
            const dadosCopia = {...dados}
            delete dadosCopia.id
            return colecao.doc(id).update(dadosCopia)
        },
        excluir    : (id) =>  colecao.doc(id).delete(),
    }
}