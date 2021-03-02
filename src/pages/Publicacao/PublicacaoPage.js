import PublicacaoNovaForm from "./components/PublicacaoNovaForm"
import PublicacaoLista from "./components/PublicacaoLista"
import withCrud from '../../hocs/withCrud'

export default withCrud(PublicacaoLista, PublicacaoNovaForm, 
    {titulo: 'Publicação', colecao: 'publicacoes', descricao: 'Publicações (Livros, Artigos, etc)'})