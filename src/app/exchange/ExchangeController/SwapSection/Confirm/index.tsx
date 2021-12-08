import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { setSwapScreen, confirmSwap } from 'store/exchange'
import { Button } from 'ui'
import { CloseIcon, CoinIcon, SwapArrowIcon } from 'ui/icons'
import { ActionsWrapper } from '../styles'
import { Title, CloseWrapper, SwapArrowWrapper, SwapCoinRow, DetailsWrapper, DetailsTitle, DetailsRow } from './styles'

enum SCREENS {
  APPROVE = 'approve',
  CONFIRM = 'confirm',
  SUCCESS = 'success',
}

const SCREEN_META: Record<SCREENS, { title: string; button: string }> = {
  approve: {
    title: 'Approve Swap',
    button: 'Approve Swap',
  },
  confirm: {
    title: 'Confirm Swap',
    button: 'Confirm Swap',
  },
  success: {
    title: 'Swap Success',
    button: 'Swap Success',
  },
}

export const Confirm = () => {
  const [screen, setScreen] = useState<SCREENS>(SCREENS.APPROVE)
  const [disabled, setDisabled] = useState(false)
  const dispatch = useAppDispatch()
  const exchange = useAppSelector((state) => state.exchange.swap)
  const calculateAcquiringFundValue =
    (exchange.from.amount * exchange.from.coin!.current_price) / exchange.to.coin!.current_price
  const feeInUSD = 100

  const getNextScreen = () => {
    switch (screen) {
      case SCREENS.APPROVE:
        return SCREENS.CONFIRM
      case SCREENS.CONFIRM:
        return SCREENS.SUCCESS
      case SCREENS.SUCCESS:
      default:
        return null
    }
  }

  const handleSubmit = () => {
    setDisabled(true)
    const nextScreen = getNextScreen()
    if (!nextScreen) return

    setTimeout(() => {
      setScreen(nextScreen)
      setDisabled(false)
      if (nextScreen === SCREENS.SUCCESS) dispatch(confirmSwap())
    }, 1000)
  }

  const handleGoBack = () => {
    dispatch(setSwapScreen('swap'))
  }

  return (
    <>
      <Title>
        <div>{SCREEN_META[screen].title}</div>
        <CloseWrapper onClick={handleGoBack}>
          <CloseIcon />
        </CloseWrapper>
      </Title>

      <SwapCoinRow>
        <CoinIcon image={exchange.from.coin!.image} symbol={exchange.from.coin!.symbol} />
        <div>{exchange.from.amount.toLocaleString('en-US', { maximumFractionDigits: 8 })}</div>
        <div>{exchange.from.coin?.symbol.toUpperCase()}</div>
      </SwapCoinRow>

      <SwapArrowWrapper>
        <SwapArrowIcon />
      </SwapArrowWrapper>

      <SwapCoinRow>
        <CoinIcon image={exchange.to.coin!.image} symbol={exchange.to.coin!.symbol} />
        <div>{calculateAcquiringFundValue.toLocaleString('en-US', { maximumFractionDigits: 8 })}</div>
        <div>{exchange.to.coin?.symbol.toUpperCase()}</div>
      </SwapCoinRow>

      <DetailsWrapper>
        <DetailsTitle>{`Details`}</DetailsTitle>
        <DetailsRow>
          <div>{`Minimum received`}</div>
          <div>
            {(calculateAcquiringFundValue - feeInUSD / exchange.to.coin!.current_price).toLocaleString('en-US', {
              maximumFractionDigits: 4,
            })}
            {` ` + exchange.to.coin!.symbol.toUpperCase()}
          </div>
        </DetailsRow>
        <DetailsRow>
          <div>{`Network & Protocol fees`}</div>
          <div>
            {(feeInUSD / exchange.to.coin!.current_price).toLocaleString('en-US', {
              maximumFractionDigits: 4,
            })}
            {` ` + exchange.to.coin!.symbol.toUpperCase()}
          </div>
        </DetailsRow>
      </DetailsWrapper>

      <ActionsWrapper>
        {screen !== SCREENS.SUCCESS && (
          <Button variant={'primary'} disabled={disabled} onClick={handleSubmit}>
            {SCREEN_META[screen].button}
          </Button>
        )}
        <Button variant='tertirary' onClick={handleGoBack}>
          {screen === SCREENS.SUCCESS ? 'Go back' : 'Cancel'}
        </Button>
      </ActionsWrapper>
    </>
  )
}
