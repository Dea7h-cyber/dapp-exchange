import { useEffect, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { useWindowSize } from 'hooks'

import { useAppDispatch } from 'store'
import { metamaskInit } from 'store/exchange'

import { Layout } from './layout'
import { CryptoTrading, Portfolio, Settings, Transactions, Trending } from './pages'
import { ContentBlock } from './styles'

export const App = () => {
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  const isMobileSize = !width || width <= 884

  useEffect(() => {
    dispatch(metamaskInit())
  }, [dispatch])

  const tooltipState = useMemo(() => isMobileSize, [isMobileSize])

  return (
    <>
      <Layout>
        <ContentBlock>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </ContentBlock>
        <ContentBlock>
          <CryptoTrading />
        </ContentBlock>
      </Layout>
      <ReactTooltip type='dark' effect='solid' disable={tooltipState} />
    </>
  )
}
