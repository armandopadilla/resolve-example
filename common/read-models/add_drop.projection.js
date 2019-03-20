import {
  ADD_DROP_INIT
} from '../eventTypes'

export default {

  Init: async store => {
    await store.defineTable('AddDropPlayers', {
      indexes: {
        id: 'string'
      },
      fields: ['createdAt', 'playerName']
    })
  },

  /*
  [ADD_DROP_INIT]: async (store, {
    aggregateId,
    timestamp,
    payload: { players }
  }) => {
    const playerList = {
      id: aggregateId,
      players
    }
  }*/
}