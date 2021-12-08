import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  padding: 10px;
  font-style: normal;
  font-weight: normal;
  transition: 0.2s ease-in-out;

  &:hover {
    border-color: #b6bac8;
  }
`

// Title
export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8c8c;
  text-transform: capitalize;
`

// Content
export const Content = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr auto;
`

export const UserInput = styled.input`
  all: unset;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  // Fix me
  width: 100%;
  padding: 5px 0;
`

export const DropdownSelect = styled.div`
  display: flex;
  align-items: center;
`

export const MaxBalance = styled.div`
  color: #0185ff;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid #0185ff;
  box-sizing: border-box;
  filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.016));
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
`

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`

export const AssetName = styled.div`
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  margin-left: 10px;
`

export const AssetIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 5px;

  img {
    width: 22px;
    height: 22px;
  }
`

export const DropdownArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

// Balance
export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8c8c8c;
`

export const BalanceValue = styled.div`
  font-size: 12px;
`
