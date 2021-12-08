import { useAppDispatch } from 'store'
import { setWalletAddress } from 'store/exchange'

import { ConnectButton, ConnectContent, ConnectWrapper, Title } from './styles'

export const ConnectWallet = () => {
  const dispatch = useAppDispatch()

  return (
    <ConnectWrapper>
      <ConnectContent>
        <Title>{`Connect Wallet`}</Title>
        <ConnectButton onClick={() => dispatch(setWalletAddress())}>MetaMask</ConnectButton>
      </ConnectContent>
    </ConnectWrapper>
  )
}
