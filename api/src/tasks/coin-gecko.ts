import axios from 'axios'
import { logger } from '@/utils'
import { GeckoCoinMarket } from '@/typings'
import { getConnectedUsers } from '@/sockets'
import { COIN_GECKO_API } from '@/environment'
import { io } from '@/app'

export let COINS_LIST: GeckoCoinMarket[] = []

export const fetchCoinsList = async () => {
  if (!getConnectedUsers().length && COINS_LIST.length) return

  try {
    const { data } = await axios.get<GeckoCoinMarket[]>(COIN_GECKO_API + 'coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        price_change_percentage: '1h,24h,7d,14d,30d,200d,1y',
      },
    })

    COINS_LIST = data
    io.emit('coins list', data)
    logger.info(`Fetched ${data.length} coins`)
  } catch (error) {
    logger.error(`Failed to fetch CoinGecko coins data.`, error)
  }
}
