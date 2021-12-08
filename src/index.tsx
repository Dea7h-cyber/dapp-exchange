import { StrictMode } from 'react'
import { default as ReactDOM } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalStyles } from 'styles'
import { App } from './app'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
)
