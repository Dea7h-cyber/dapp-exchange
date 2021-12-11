import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 35px;
`

export const CloseWrapper = styled.div`
  cursor: pointer;

  svg {
    transition: 0.2s ease-in-out;
    color: #8c8c8c;
  }

  &:hover svg {
    color: #0185ff;
  }
`

export const SwapCoinRow = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr auto;
  align-items: center;
  color: #000000;
  font-weight: 600;
  font-size: 16px;
`

export const SwapArrowWrapper = styled.div`
  padding: 20px 7px;
  color: #8c8c8c;
`

export const DetailsWrapper = styled.div`
  margin: 35px 0 75px 0;
  color: #8c8c8c;
`

export const DetailsTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 11px;
  border-bottom: 1px solid #f0f0f0;
`

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: normal;
  font-size: 12px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
`
