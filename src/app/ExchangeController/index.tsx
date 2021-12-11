import { ControllerWrapper, ControllerContent } from './styles'

import { MyFunds } from './MyFunds'
import { SwapSection } from './SwapSection'

export const ExchangeController = () => {
  return (
    <ControllerWrapper>
      <ControllerContent>
        <MyFunds />
        <SwapSection />
      </ControllerContent>
    </ControllerWrapper>
  )
}
