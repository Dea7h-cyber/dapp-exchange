import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useAppDispatch } from 'store'
import { accountConnect, accountCheckIfConnected } from 'store/exchange/actions'

import { ConnectButton, ConnectContent, ConnectWrapper, Title } from './styles'

export const ConnectWallet = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!window.ethereum?.isMetaMask)
      toast.error("You don't seem to have MetaMask installed.", {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      })
    else dispatch(accountCheckIfConnected())
  }, [dispatch])

  return (
    <ConnectWrapper>
      <ConnectContent>
        <Title>{`Connect Wallet`}</Title>
        <ConnectButton onClick={() => dispatch(accountConnect())}>MetaMask</ConnectButton>
      </ConnectContent>
    </ConnectWrapper>
  )
}
