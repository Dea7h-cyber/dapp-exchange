import { useAppSelector } from 'store'
import { SwapWrapper } from './styles'

import { Confirm } from './Confirm'
import { Swap } from './Swap'

export const SwapSection = () => {
  const screen = useAppSelector((state) => state.exchange.swap.screen)

  const renderScreen = () => {
    switch (screen) {
      case 'confirm':
        return <Confirm />
      case 'swap':
      default:
        return <Swap />
    }
  }

  return <SwapWrapper>{renderScreen()}</SwapWrapper>
}
