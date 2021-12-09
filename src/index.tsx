import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import { store } from './store'
import { GlobalStyles } from 'styles'
import { App } from './app'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.baseURL = process.env.REACT_APP_COIN_GECKO_API

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <GlobalStyles />
    <ToastContainer autoClose={5000} closeButton={false} theme='light' bodyStyle={{ fontSize: 14 }} />
  </StrictMode>,
  document.getElementById('root'),
)
