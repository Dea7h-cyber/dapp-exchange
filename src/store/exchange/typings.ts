export interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  atl: number
  atl_change_percentage: number
  ath_date: string
  atl_date: string
  last_updated: string
  balance: number
  balanceUSD: number
}

export interface Fund {
  symbol: string
  balance: number
}

export interface ExchangeState {
  loading: boolean
  coins: Coin[] | null
  account: {
    addresses: string[] | null
    connecting: boolean
    funds: Coin[] | null
  }
  swap: {
    screen: 'swap' | 'confirm'
    from: {
      coin: Coin | null
      amount: number
    }
    to: {
      coin: Coin | null
    }
  }
}
