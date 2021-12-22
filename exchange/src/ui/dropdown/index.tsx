import { ArrowIcon } from 'ui/icons'
import {
  DropdownWrapper,
  Title,
  Content,
  Balance,
  BalanceValue,
  UserInput,
  DropdownSelect,
  MaxBalance,
  SelectWrapper,
  AssetName,
  AssetIcon,
  DropdownArrow,
} from './styles'

interface Props {
  title: string
  value: number
  coin?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  max?: boolean
  onClickMax?: () => void
  onClickDropdown: () => void
}

export const Dropdown: React.FC<Props> = ({ title, value, coin, onChange, max, onClickMax, onClickDropdown }) => {
  if (!coin) return null

  return (
    <DropdownWrapper>
      <Title>{title}</Title>

      <Content>
        <UserInput type='number' placeholder='0.00' value={value || ''} onChange={onChange} readOnly={!onChange} />
        <DropdownSelect>
          {max && onClickMax && !!coin.balance && value !== coin.balance && (
            <MaxBalance onClick={onClickMax}>{`MAX`}</MaxBalance>
          )}
          <SelectWrapper onClick={onClickDropdown}>
            <AssetName>{coin.symbol.toUpperCase()}</AssetName>
            <AssetIcon>
              <img src={coin.image} alt={coin.symbol} />
            </AssetIcon>
            <DropdownArrow>
              <ArrowIcon />
            </DropdownArrow>
          </SelectWrapper>
        </DropdownSelect>
      </Content>

      <Balance>
        <BalanceValue>
          {'$' + (value * coin.current_price).toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' USD'}
        </BalanceValue>
        <BalanceValue>
          Balance: {coin.balance ? coin.balance.toLocaleString('en-US', { maximumFractionDigits: 8 }) : '0.00'}
        </BalanceValue>
      </Balance>
    </DropdownWrapper>
  )
}
