import styled from 'styled-components'

export const SwapWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  background: #ffffff;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08),
    0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 24px;

  @media (max-width: 800px) {
    order: 1;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 24px;
`

export const SwapArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: #0185ff;
`

export const ActionsWrapper = styled.div`
  & > button {
    margin-top: 10px;

    &:first-of-type {
      margin-top: 30px;
    }
  }
`

export const DropdownWrapper = styled.div`
  position: relative;
`

export const DropdownCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
`
