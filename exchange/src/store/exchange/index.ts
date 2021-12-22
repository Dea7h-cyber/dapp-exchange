import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { ExchangeState } from './typings'
import { metamaskInit, metamaskConnect } from './actions'

const initialState: ExchangeState = {
  metamask: {
    address: null,
    inProgress: false,
    funds: null,
  },
}

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,

  reducers: {
    metamaskDisconnect: (state) => {
      state.metamask.address = null
      state.metamask.inProgress = false
      toast.info(`Metamask wallet disconnected!`)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(metamaskInit.pending, (state) => {
        state.metamask.inProgress = true
      })
      .addCase(metamaskInit.rejected, (state) => {
        state.metamask.inProgress = false
      })
      .addCase(metamaskInit.fulfilled, (state, { payload }) => {
        state.metamask.inProgress = false
        state.metamask.address = payload
      })

      .addCase(metamaskConnect.pending, (state) => {
        state.metamask.inProgress = true
      })
      .addCase(metamaskConnect.fulfilled, (state, { payload }) => {
        state.metamask.address = payload
        state.metamask.inProgress = false
      })
  },
})

export const { metamaskDisconnect } = exchangeSlice.actions

export default exchangeSlice.reducer
export * from './typings'
export * from './actions'
