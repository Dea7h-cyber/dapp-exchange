import styled from 'styled-components'

export const CoinWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  display: grid;
  grid-template-columns: 44px 1fr auto auto;
  padding: 15px 0;
  cursor: pointer;
`

export const CoinIconWrapper = styled.div<{ normalSize?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    display: block;
    width: ${({ normalSize }) => (normalSize ? '32px' : '24px')};
    height: ${({ normalSize }) => (normalSize ? '32px' : '24px')};
  }
`

export const Section = styled.div<{ alignRight?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ alignRight }) => (alignRight ? `align-items: flex-end;` : null)}
`

export const MainText = styled.div<{ normalSize?: boolean }>`
  font-weight: 500;
  font-size: ${({ normalSize }) => (normalSize ? '14px' : '12px')};
  margin-bottom: 5px;
`

export const SubText = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
`

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  transform: rotate(270deg);
`
