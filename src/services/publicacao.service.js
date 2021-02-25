import { criadorDeServices } from './utils/service-utils'

export const {
    listar: listarPublicacoes,
    umRegistro: pegaPublicacao,
    inserir: inserirPublicacao,
    atualizar: atualizarPublicacao,
    excluir: removerPublicacao
} = criadorDeServices('publicacoes')