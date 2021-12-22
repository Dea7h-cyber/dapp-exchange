import styled from 'styled-components'

export const NavBarWrapper = styled.nav`
  grid-area: navigation;
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 74px 0;
  border-right: 1px solid #f0f0ff;

  .active svg {
    fill: #9999ff;
  }

  @media (max-width: 884px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
    border-top: 1px solid #f0f0ff;
    border-right: none;
  }
`

export const NavIconWrapper = styled.div`
  display: flex;
  width: 74px;
  height: 74px;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    fill: #a7b2be;
    width: 30px;
    height: 30px;
    transition: 200ms ease-in-out;
  }
`

export const Version = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 884px) {
    display: none;
  }
`
