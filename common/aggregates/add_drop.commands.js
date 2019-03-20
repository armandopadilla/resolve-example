import {
  ADD_PLAYER,
  DROP_PLAYER,
  ADD_DROP_INIT,
} from '../eventTypes';

export default {

  // Initialize the world - List of players in the system.
  initAddDrop: (state) => {
    console.log("commands - initAddDrop...", state);
    if (state.createdAt) throw new Error('Initial state already created.');

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

  addPlayer: (state, { payload: { playerName, userId } }) => {
    console.log("command - addPlayer");

    if (!playerName) throw new Error('playerName required');
    if (!userId) throw new Error('userId required.');

    console.log("command - addPlayer - command state", state);
    const found = state.players.find((player) => {
      return (player.playerName == playerName) && (player.ownerId != null)
    });

    if (!found) {
      return {
        type: ADD_PLAYER,
        payload: {
          playerName,
          ownerId: userId
        }
      }
    }

    throw new Error('Player already taken little homie');

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

