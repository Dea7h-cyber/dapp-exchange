import { Coin } from 'store/exchange'
import { ArrowIcon, CoinIcon } from 'ui/icons'
import { ArrowWrapper, CoinWrapper, MainText, Section, SubText } from './styles'

interface Props {
  coin: Coin
  arrow?: boolean
  normalSize?: boolean
  onClick: () => void
}

export const CoinRow: React.FC<Props> = ({ coin, arrow, normalSize, onClick }) => {
  return (
    <CoinWrapper onClick={onClick}>
      <CoinIcon symbol={coin.symbol} image={coin.image} size={normalSize ? 32 : 24} />
      <Section>
        <MainText normalSize={normalSize}>{coin.name}</MainText>
        <SubText>{coin.symbol.toUpperCase()}</SubText>
      </Section>
      {typeof coin?.balanceUSD !== 'undefined' && typeof coin.balance !== 'undefined' && (
        <Section alignRight>
          <MainText>${coin.balanceUSD.toLocaleString('en-US', { maximumFractionDigits: 2 })}</MainText>
          <SubText>{coin.balance.toLocaleString('en-US', { maximumFractionDigits: 8 })}</SubText>
        </Section>
      )}
      {arrow && (
        <ArrowWrapper>
          <ArrowIcon />
        </ArrowWrapper>
      )}
    </CoinWrapper>
  )
}
