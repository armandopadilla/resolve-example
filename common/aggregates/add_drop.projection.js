import {
  ADD_PLAYER,
  DROP_PLAYER
} from '../eventTypes'

export default {
  Init: () => ({}),
  [ADD_PLAYER]: (state, { timestamp }) => ({
    ...state,
    createdAt: timestamp
  }),
  [DROP_PLAYER]: () => ({})
}
