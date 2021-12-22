import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 74px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  grid-template-areas: 'navigation main-content';
  overflow: auto;

  @media (max-width: 884px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 74px;
    grid-template-areas:
      'main-content'
      'navigation';
    overflow: hidden;
  }
`

export const Content = styled.div`
  grid-area: main-content;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 884px) {
    display: block;
    height: calc(calc(var(--vh, 1vh) * 100) - 74px);
    overflow: auto;
    padding: 25px;
  }
`
