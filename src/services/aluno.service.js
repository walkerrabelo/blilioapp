import { criadorDeServices } from './utils/service-utils'

export const { lista : listaDeAlunos,
               umRegistro: pegaAluno,
               inserir: inserirAluno,
               atualizar: atualizarAluno,
               remover: excluirAluno } = criadorDeServices(`alunos`)
