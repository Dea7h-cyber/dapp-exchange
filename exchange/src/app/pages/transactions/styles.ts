import styled from 'styled-components'

export const TransactionSubTitle = styled.div`
  padding: 20px 24px 5px 24px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.4px;
  color: #68778d;
`

export const TransactionRow = styled.div`
  padding: 8px 24px;
  display: grid;
  grid-template-columns: 35px 1fr auto;

  &:hover {
    background-color: #f5f9fc;
  }
`

export const TransactionIcon = styled.div`
  width: 35px;
  height: 35px;

  svg {
    width: 35px;
    height: 35px;
  }
`

export const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`

export const DetailsTop = styled.div<{ right?: boolean }>`
  color: #3c4a5b;
  font-size: 14px;
  font-weight: 900;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`

export const DetailsBottom = styled.div<{ right?: boolean }>`
  color: #68778d;
  font-size: 12px;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`
