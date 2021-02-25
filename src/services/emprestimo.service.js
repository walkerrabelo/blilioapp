import { criadorDeServices } from './utils/service-utils'

export const { lista : listaDeEmprestimos,
               umRegistro: pegaEmprestimo,
               inserir: inserirEmprestimo,
               atualizar: atualizarEmprestimo,
               deletar: excluirEmprestimo } = criadorDeServices(`emprestimos`)