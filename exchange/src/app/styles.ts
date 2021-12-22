import styled from 'styled-components'

export const ContentBlock = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  overflow: auto;
  width: calc(100% / 2 - 25px);
  height: 100%;
  max-width: 500px;
  max-height: min(calc(calc(var(--vh, 1vh) * 100) - 100px), 920px);
  margin-right: 50px;

  &:first-of-type {
    margin-left: 50px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 884px) {
    width: 100%;
    height: auto;
    max-width: initial;
    max-height: 500px;
    margin: 25px 0 0 0;

    &:first-of-type {
      margin: 0;
    }
  }
`

export const ContentBlockTitle = styled.div`
  padding: 24px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`
