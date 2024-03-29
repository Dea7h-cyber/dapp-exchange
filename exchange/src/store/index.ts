import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import exchangeReducer from './exchange'

export const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export * from './hooks'
