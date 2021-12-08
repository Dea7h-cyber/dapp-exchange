import { useAppDispatch, useAppSelector } from 'store'
import { Coin, setSwapCoin } from 'store/exchange'
import { CoinRow } from 'ui'
import { FundsWrapper, Title } from './styles'

export const MyFunds = () => {
  const dispatch = useAppDispatch()
  const funds = useAppSelector((state) => state.exchange.wallet.funds)

  const handleClick = (coin: Coin) => {
    dispatch(setSwapCoin({ swapFrom: true, coin }))
  }

  return (
    <FundsWrapper>
      <Title>My Funds</Title>
      {funds && funds.length ? (
        funds.map((fund) => (
          <CoinRow key={fund.symbol} coin={fund} normalSize arrow onClick={() => handleClick(fund)} />
        ))
      ) : (
        <div>No funds found.</div>
      )}
    </FundsWrapper>
  )
}
