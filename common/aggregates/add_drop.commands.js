import {
  ADD_PLAYER,
  ADD_DROP_INIT,
} from '../eventTypes';

export default {

  // Initialize the world - List of players in the system.
  initAddDrop: state => {
    if (state.createdAt) throw new Error('Initial state already created. So peace on out!');

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

    if (!playerName) throw new Error('playerName required yo');
    if (!userId) throw new Error('dude what?  userId required.');

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

    throw new Error('Player already taken little homie...');

  }
}

