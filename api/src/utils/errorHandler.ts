import { ErrorRequestHandler } from 'express'
import { logger } from './logger'

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  if (error) {
    logger.error('Unhandled error', { error: error.message })
    return res.status(500).json({ error: 'Server error.' })
  }

  next()
}
