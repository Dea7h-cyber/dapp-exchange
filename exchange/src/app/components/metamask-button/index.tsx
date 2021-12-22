import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from 'store'
import { metamaskConnect, metamaskDisconnect } from 'store/exchange'

import { FailedIcon, LoadingIcon, SuccessIcon } from 'ui/icons'
import { MetamaskWrapper } from './styles'

export const MetamaskButton = () => {
  const dispatch = useAppDispatch()
  const account = useAppSelector((state) => state.exchange.metamask)

  useEffect(() => {
    if (!window.ethereum?.isMetaMask) return

    const handleMetamaskAccountChange = (accounts: string[]) => {
      if (!accounts.length) dispatch(metamaskDisconnect())
    }

    // Emmited when user changes accounts (connect/disconnect wallet)
    window.ethereum.on('accountsChanged', handleMetamaskAccountChange)

    return () => {
      window.ethereum?.removeListener('accountsChanged', handleMetamaskAccountChange)
    }
  }, [dispatch])

  const handleMetamask = async () => {
    if (account.inProgress) return

    if (!account.address) dispatch(metamaskConnect())
    else toast.info(`To disconnect please use your metamask wallet browser extension.`)
  }

  return (
    <MetamaskWrapper onClick={handleMetamask}>
      {account.inProgress ? <LoadingIcon /> : account.address ? <SuccessIcon /> : <FailedIcon />}
    </MetamaskWrapper>
  )
}
