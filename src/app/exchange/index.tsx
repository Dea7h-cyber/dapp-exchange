import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store'
import { fetchCoins } from 'store/exchange/actions'
import { ExchangeWrapper } from './styles'

import { ConnectWallet } from './ConnectWallet'
import { ExchangeController } from './ExchangeController'

export const Exchange = () => {
  const dispatch = useAppDispatch()
  const walletConnected = useAppSelector((state) => state.exchange.wallet.address)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return <ExchangeWrapper>{!walletConnected ? <ConnectWallet /> : <ExchangeController />}</ExchangeWrapper>
}
