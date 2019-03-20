import {
  ADD_PLAYER,
  DROP_PLAYER,
  ADD_DROP_INIT,
} from '../eventTypes';

export default {

  // Initialize the world - List of players in the system.
  initAddDrop: (state) => {
    return {
      type: ADD_DROP_INIT,
      payload: {
        players: [
          {
            playerName: "Drew Brees",
            ownerId: null
          },
          {
            playerName: "Amari Cooper",
            ownerId: null
          }
        ]
      }
    }
  },

  addPlayer: (state, { payload: { playerId, userId } }) => {
    if (!playerId) throw new Error('playerId required');
    if (!userId) throw new Error('userId required.');

    return {
      type: ADD_PLAYER,
      payload: {
        playerId,
        ownerId: userId
      }
    }
  },

  /*
  dropPlayer: (state, { payload: { playerId, userId } }) => {
    if (!playerId) throw new Error('playerId required');
    if (!userId) throw new Error('userId required.');


    return {
      type: DROP_PLAYER,
      payload: {
        playerId
      }
    }
  }*/
}

