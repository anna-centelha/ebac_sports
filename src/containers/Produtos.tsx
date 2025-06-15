import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'
import { useAppSelector } from '../hooks/reduxHooks'
import { useGetProdutosQuery } from '../store/api/apiSlice'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()
  const favoritos = useAppSelector((state) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <div>Carregando produtos...</div>
  if (error) return <div>Erro ao carregar produtos.</div>

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent