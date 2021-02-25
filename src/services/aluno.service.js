import { criadorDeServices } from './utils/service-utils'

export const { listar : listarAlunos,
               umRegistro: pegaAluno,
               inserir: inserirAluno,
               atualizar: atualizarAluno,
               excluir: excluirAluno } = criadorDeServices(`alunos`)
