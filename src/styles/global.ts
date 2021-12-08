import { createGlobalStyle } from 'styled-components'
import '@fontsource/inter'

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: Inter;
    box-sizing: border-box;
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
