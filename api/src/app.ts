import express, { json } from 'express'
import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'
import helmet from 'helmet'

import { PORT, ORIGIN_URL } from '@/environment'
import { router } from '@/routes'
import { wsAttachListeners } from '@/sockets'
import { errorHandler, logger } from '@/utils'
import '@/tasks'

const app = express()
const server = http.createServer(app)
export const io = new Server(server, { cors: { origin: process.env.ORIGIN, credentials: true } })

// app.set('trust proxy', 1)
app.use(helmet())
app.use(cors({ origin: ORIGIN_URL, credentials: true }))
app.use(json({ type: 'application/json', limit: '1kb' }))
app.use(router)
app.use(errorHandler)

// io.use(wsMultiConnectionMiddleware)
io.on('connection', wsAttachListeners)

server.listen(PORT, () => {
  logger.info(`Application started on port ${PORT}`)
})
