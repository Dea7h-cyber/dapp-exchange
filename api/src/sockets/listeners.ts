import { Socket } from 'socket.io'
import { logger } from '@/utils'
import { COINS_LIST, fetchCoinsList } from '@/tasks'
import { getConnectedUsers, getUserFromSocket } from './tools'

export const wsAttachListeners = (socket: Socket) => {
  logger.debug('Socket connected.', getUserFromSocket(socket))
  if (!COINS_LIST.length && getConnectedUsers().length === 1) fetchCoinsList()

  socket.on('disconnect', () => {
    logger.debug('Socket disconnected.', getUserFromSocket(socket))
  })
}
