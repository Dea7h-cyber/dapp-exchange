import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from 'store'
import { Coin } from './typings'

export const fetchCoins = createAsyncThunk('exchange/fetchCoins', async () => {
  const response = await axios.get<Coin[]>('coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
    },
  })

  return response.data
})

export const accountCheckIfConnected = createAsyncThunk<string[]>('exchange/accountCheckIfConnected', async () => {
  return await window.ethereum.request({ method: 'eth_accounts' })
})

export const accountConnect = createAsyncThunk<string[]>(
  'exchange/accountConnect',
  async () => {
    return await window.ethereum.request({ method: 'eth_requestAccounts' })
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState
      return !state.exchange.account.connecting
    },
  },
)
