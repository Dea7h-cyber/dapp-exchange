import styled from 'styled-components'
import { getCoinIconPath } from 'utils'

interface Props {
  symbol: string
  image: string
  size?: number
}

export const CoinIcon: React.FC<Props> = ({ symbol, image, size = 24 }) => {
  return (
    <CoinIconWrapper size={size}>
      <img
        src={getCoinIconPath(symbol)}
        alt={symbol}
        onError={(e) => {
          e.currentTarget.src = image
        }}
      />
    </CoinIconWrapper>
  )
}

const CoinIconWrapper = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    display: block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`
