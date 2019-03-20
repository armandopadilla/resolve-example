import {
  ADD_PLAYER,
  DROP_PLAYER,
  ADD_DROP_INIT,
} from '../eventTypes'

export default {
  Init: () => {
    console.log("projection - Init...");
    return {}
  },
  [ADD_DROP_INIT]: (state, {timestamp}) => {
    console.log("projection - add_drop_init");
    return {
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
    }
  },
  [ADD_PLAYER]: (state, { timestamp, payload: { playerName, ownerId }}) => {
    // The above payload params are coming from the command response.
    console.log("projection - add_player", state);

    // Update the records...cause why not right?
    const newList = state.players.map((player) => {
      if (player.playerName == playerName) {
        return { playerName, ownerId }
      } else {
        return player
      }
    });

    console.log(newList);

    return {
      ...state,
      // This takes hold ONLY when the command is valid.
      players: newList //state.players.concat({ playerName, ownerId })
    }
  },
  [DROP_PLAYER]: () => ({})
}
