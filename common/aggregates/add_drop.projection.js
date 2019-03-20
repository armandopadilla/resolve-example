import {
  ADD_PLAYER,
  ADD_DROP_INIT,
} from '../eventTypes'

export default {
  Init: () => ({}),

  [ADD_DROP_INIT]: (state, { timestamp }) => ({
      ...state,
      players: [
        {
          playerName: "Drew Brees",
          ownerId: null
        },
        {
          playerName: "Amari Cooper",
          ownerId: null
        }
      ],
      createdAt: timestamp
  }),

  [ADD_PLAYER]: (state, { timestamp, payload: { playerName, ownerId }}) => {
    // Update the records...cause why not right?
    // I really should be using Object.assign...but whatevers.
    const newList = state.players.map((player) => {
      if (player.playerName == playerName) {
        return { playerName, ownerId }
      } else {
        return player
      }
    });

    return {
      ...state,
      players: newList
    }
  }
}
