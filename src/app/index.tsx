import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store'
import { fetchCoins } from 'store/exchange/actions'

import { ConnectWallet } from './ConnectWallet'
import { ExchangeController } from './ExchangeController'

export const App = () => {
  const dispatch = useAppDispatch()
  const accountAddresses = useAppSelector((state) => state.exchange.account.addresses)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return !accountAddresses ? <ConnectWallet /> : <ExchangeController />
}
