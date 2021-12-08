import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Coin } from './typings'

const GECKO_API = 'https://api.coingecko.com/api/v3/'

export const fetchCoins = createAsyncThunk('exchange/fetchCoins', async () => {
  const response = await axios.get<Coin[]>(GECKO_API + 'coins/markets', {
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
