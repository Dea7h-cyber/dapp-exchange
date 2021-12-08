import { useState } from 'react'

import { useAppDispatch, useAppSelector } from 'store'
import { setSwapAmount, setSwapAmountMax, setSwapScreen, reverseSwapCoins } from 'store/exchange'
import { Button, Dropdown } from 'ui'
import { SwapArrowIcon } from 'ui/icons'
import { DropdownOptions } from './DropdownOptions'

import { Title, SwapArrow, ActionsWrapper, DropdownWrapper, DropdownCover } from '../styles'

export const Swap = () => {
  const exchange = useAppSelector((state) => state.exchange)
  const dispatch = useAppDispatch()
  const [dropdownOptions, setDropdown] = useState<null | 'from' | 'to'>(null)

  // Calculate how many tokens we will get
  const calculateAcquiringFundValue =
    (exchange.swap.from.amount * exchange.swap.from.coin!.current_price) / exchange.swap.to.coin!.current_price

  const setFromValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value) || 0
    dispatch(setSwapAmount({ amount }))
  }

  return (
    <>
      <Title>Swap</Title>

      <DropdownWrapper>
        <Dropdown
          title='From'
          value={exchange.swap.from.amount}
          onChange={setFromValue}
          coin={exchange.swap.from.coin}
          max
          onClickMax={() => dispatch(setSwapAmountMax())}
          onClickDropdown={() => setDropdown('from')}
        />

        <SwapArrow>
          <SwapArrowIcon onClick={() => dispatch(reverseSwapCoins())} />
        </SwapArrow>

        <Dropdown
          title='To'
          value={calculateAcquiringFundValue}
          coin={exchange.swap.to.coin}
          onClickDropdown={() => setDropdown('to')}
        />
        {dropdownOptions ? (
          <>
            <DropdownCover />
            <DropdownOptions action={dropdownOptions} onClick={() => setDropdown(null)} />
          </>
        ) : null}
      </DropdownWrapper>

      <ActionsWrapper>
        <Button
          variant='primary'
          disabled={!exchange.swap.from.amount}
          onClick={() => dispatch(setSwapScreen('confirm'))}
        >{`Review`}</Button>
      </ActionsWrapper>
    </>
  )
}
