import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coin, ExchangeState, Fund } from './typings'
import { accountConnect, accountCheckIfConnected, fetchCoins } from './actions'

const defaultFunds: Fund[] = [
  { symbol: 'btc', balance: 3.421235665543423423 },
  { symbol: 'eth', balance: 532.122 },
  { symbol: 'ada', balance: 16788854 },
  { symbol: 'matic', balance: 762824 },
  { symbol: 'usdc', balance: 10000 },
]

const initialState: ExchangeState = {
  loading: true,
  coins: null,
  account: {
    addresses: null,
    connecting: false,
    funds: null,
  },
  swap: {
    screen: 'swap',
    from: {
      amount: 0,
      coin: null,
    },
    to: {
      coin: null,
    },
  },
}

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,

  reducers: {
    reverseSwapCoins: (state) => {
      const fromCoin = state.swap.from.coin
      state.swap.from.coin = state.swap.to.coin
      state.swap.to.coin = fromCoin
      state.swap.from.amount = 0
    },

    setSwapCoin: (state, { payload: { swapFrom, coin } }: PayloadAction<{ swapFrom: boolean; coin: Coin }>) => {
      // Disable when user is in process of confirming
      if (state.swap.screen !== 'swap') return

      if (!state.swap.from.coin || !state.swap.to.coin) return
      const action = swapFrom ? 'from' : 'to'
      const actionOpposite = swapFrom ? 'to' : 'from'

      if (state.swap[actionOpposite].coin!.symbol === coin.symbol) {
        // If user is trying to select the same coin twice, swapping coins instead
        state.swap[actionOpposite].coin = state.swap[action].coin
        state.swap[action].coin = coin
      } else {
        state.swap[action].coin = coin
      }

      if (swapFrom) state.swap.from.amount = 0
    },

    setSwapAmount: (state, { payload: { amount } }: PayloadAction<{ amount: number }>) => {
      const balance = state.swap.from.coin!.balance!
      state.swap.from.amount = amount <= balance ? amount : balance
    },

    setSwapAmountMax: (state) => {
      state.swap.from.amount = state.swap.from.coin?.balance || 0
    },

    setSwapScreen: (state, { payload }: PayloadAction<ExchangeState['swap']['screen']>) => {
      if (payload === 'swap') state.swap.from.amount = 0
      state.swap.screen = payload
    },

    confirmSwap: (state) => {
      state.coins = state
        .coins!.map((coin) => {
          if (coin.symbol === state.swap.from.coin!.symbol) {
            coin.balance -= state.swap.from.amount
            coin.balanceUSD -= state.swap.from.coin!.current_price * state.swap.from.amount
          }

          if (coin.symbol === state.swap.to.coin!.symbol) {
            const totalInUSD = state.swap.from.coin!.current_price * state.swap.from.amount - 100
            coin.balance += totalInUSD / state.swap.to.coin!.current_price
            coin.balanceUSD += totalInUSD
          }

          return coin
        })
        .sort((a, b) =>
          (a.balanceUSD || b.balanceUSD ? a.balanceUSD > b.balanceUSD : a.market_cap > b.market_cap) ? -1 : 1,
        )

      state.account.funds = state.coins
        .filter((coin) => coin.balance > 0 || defaultFunds.find((fund) => fund.symbol === coin.symbol))
        .sort((a, b) => (a.balanceUSD > b.balanceUSD ? -1 : 1))

      state.swap.from.coin = state.coins.find((coin) => coin.symbol === state.swap.from.coin?.symbol)!
      state.swap.to.coin = state.coins.find((coin) => coin.symbol === state.swap.to.coin?.symbol)!
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(accountCheckIfConnected.pending, (state) => {
        state.account.connecting = true
      })
      .addCase(accountCheckIfConnected.rejected, (state) => {
        state.account.connecting = false
      })
      .addCase(accountCheckIfConnected.fulfilled, (state, { payload }) => {
        state.account.connecting = false
        state.account.addresses = payload.length ? payload : null
      })

      .addCase(accountConnect.pending, (state) => {
        state.account.connecting = true
      })
      .addCase(accountConnect.rejected, (state) => {
        state.account.connecting = false
      })
      .addCase(accountConnect.fulfilled, (state, { payload }) => {
        state.account.addresses = payload
        state.account.connecting = false
      })

      .addCase(fetchCoins.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCoins.rejected, () => {
        console.error(`Failed to fetch tokens from CoinGeckoAPI`)
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.loading = false

        state.coins = action.payload
          .map((coin) => {
            const fund = defaultFunds.find((fund) => fund.symbol === coin.symbol)

            return {
              ...coin,
              balance: fund?.balance || 0,
              balanceUSD: (fund?.balance || 0) * coin.current_price,
            }
          })
          .sort((a, b) =>
            (a.balanceUSD || b.balanceUSD ? a.balanceUSD > b.balanceUSD : a.market_cap > b.market_cap) ? -1 : 1,
          )

        state.account.funds = defaultFunds
          .map((fund) => {
            const coin = action.payload.find((coin) => coin.symbol === fund.symbol)
            if (!coin) return null

            return {
              ...coin,
              balance: fund.balance,
              balanceUSD: fund.balance * coin.current_price,
            }
          })
          .filter(Boolean)
          .sort((a, b) => ((a?.balanceUSD || 0) > (b?.balanceUSD || 0) ? -1 : 1)) as Coin[]

        state.swap.from.coin = state.account.funds.find((fund) => fund.symbol === 'btc')!
        state.swap.to.coin = state.coins.find((coin) => coin.symbol === 'eth')!
      })
  },
})

export const { setSwapAmount, setSwapCoin, setSwapAmountMax, setSwapScreen, confirmSwap, reverseSwapCoins } =
  exchangeSlice.actions

export default exchangeSlice.reducer
export * from './typings'
