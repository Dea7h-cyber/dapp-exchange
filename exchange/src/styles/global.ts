import { createGlobalStyle } from 'styled-components'
import '@fontsource/roboto'

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #f0f0ff;
  }
  
  * {
    box-sizing: border-box;
    font-family: Roboto;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`
