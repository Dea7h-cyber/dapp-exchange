import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store'
import { fetchCoins } from 'store/exchange/actions'
import { ExchangeWrapper } from './styles'

import { ConnectWallet } from './ConnectWallet'
import { ExchangeController } from './ExchangeController'

export const Exchange = () => {
  const dispatch = useAppDispatch()
  const accountAddresses = useAppSelector((state) => state.exchange.account.addresses)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return <ExchangeWrapper>{!accountAddresses ? <ConnectWallet /> : <ExchangeController />}</ExchangeWrapper>
}
