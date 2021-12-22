import styled from 'styled-components'

export const MetamaskWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 74px;
  height: 74px;
  background: url('/images/metamask.svg') no-repeat center center/44px 44px;
  cursor: pointer;

  svg {
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px;
  }

  @media (max-width: 884px) {
    position: initial;
  }
`
