import { criadorDeServices } from './utils/service-utils'

export const {
    lista: listaDePublicacoes,
    umRegistro: pegaPublicacao,
    inserir: inserirPublicacao,
    atualizar: atualizarPublicacao,
    remover: removerPublicacao
} = criadorDeServices('publicacoes')