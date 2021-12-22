import { schedule } from 'node-cron'
import { fetchCoinsList } from './coin-gecko'

/**
 * Fetch coins list from coingecko every 5s to update prices
 */
schedule('*/5 * * * * *', fetchCoinsList)

export { COINS_LIST, fetchCoinsList } from './coin-gecko'
