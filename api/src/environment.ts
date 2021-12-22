import dotenv from 'dotenv'

export const IS_PRODUCTION = process.env.ENV === 'production'
dotenv.config({ path: IS_PRODUCTION ? '.env.production' : '.env' })

export const { PORT, ORIGIN_URL, COIN_GECKO_API } = process.env
