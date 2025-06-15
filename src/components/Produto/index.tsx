import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { adicionarAoCarrinho } from '../../store/slices/carrinhoSlice'
import { toggleFavorito } from '../../store/slices/favoritosSlice'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useAppDispatch()

  const handleAdicionarAoCarrinho = () => {
    dispatch(adicionarAoCarrinho(produto))
    alert('Produto adicionado ao carrinho!')
  }

  const handleToggleFavorito = () => {
    dispatch(toggleFavorito(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleToggleFavorito} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent