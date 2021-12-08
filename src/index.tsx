import { StrictMode } from 'react'
import { default as ReactDOM } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalStyles } from 'styles'
import { App } from './app'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
