import React, { useCallback, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { Coin, setSwapCoin } from 'store/exchange'
import { CoinRow } from 'ui'
import { CloseIcon } from 'ui/icons'
import { DropdownOptionsWrapper, Title, ArrowWrapper } from './styles'

interface Props {
  action: 'from' | 'to'
  onClick: () => void
}

export const DropdownOptions: React.FC<Props> = ({ action, onClick }) => {
  const [search, setSearch] = useState<string>('')
  const dispatch = useAppDispatch()
  const exchange = useAppSelector((state) => state.exchange)

  const coins = useMemo(
    () => (action === 'from' ? exchange.wallet.funds! : exchange.coins!),
    [action, exchange.wallet.funds, exchange.coins],
  )

  const handleCoinSelect = (coin: Coin) => {
    dispatch(setSwapCoin({ swapFrom: action === 'from', coin }))
    onClick()
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[a-z0-9$]{0,10}$/i.test(e.target.value)) setSearch(e.target.value)
  }

  const renderCoins = useCallback(() => {
    return coins
      .filter((coin) => new RegExp(search, 'i').test(coin.symbol + coin.name))
      .map((coin) => <CoinRow coin={coin} key={coin.symbol} onClick={() => handleCoinSelect(coin)} />)
    // eslint-disable-next-line
  }, [coins, search])

  return (
    <DropdownOptionsWrapper>
      <Title>
        <input placeholder='Search tokens' value={search} onChange={handleSearch} />
        <ArrowWrapper onClick={() => onClick()}>
          <CloseIcon />
        </ArrowWrapper>
      </Title>
      {renderCoins()}
    </DropdownOptionsWrapper>
  )
}
