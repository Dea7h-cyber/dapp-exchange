import { Socket } from 'socket.io'
import { ExtendedError } from 'socket.io/dist/namespace'
import { logger } from '@/utils'
import { getConnectedUsers } from './tools'
import { io } from '../app'

/**
 * Checks for older connection from the same IP and disconnects it
 */
export const wsMultiConnectionMiddleware = (socket: Socket, next: (error?: ExtendedError) => void) => {
  const users = getConnectedUsers()
  const exists = users.find((user) => user.ip === socket.request.socket.remoteAddress && user.id !== socket.id)

  if (exists) {
    logger.debug(`New connection found, disconnecting old socket`, exists)

    try {
      io.sockets.sockets.get(exists.id)!.disconnect(true)
    } catch (error) {
      logger.debug(`Failed to disconnect old socket`, exists)
    }
  }

  next()
}
