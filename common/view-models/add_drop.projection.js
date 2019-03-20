import {
  ADD_PLAYER,
  DROP_PLAYER,
  ADD_DROP_INIT,
} from '../eventTypes';

export default {
  Init: () => null,

  [ADD_DROP_INIT]: () => ({}),

  [ADD_PLAYER]: (state, { aggregateId, payload: { playerId, userId } }) => ({
    id: aggregateId,
    playerId,
    ownerId: userId
  }),

  [DROP_PLAYER]: (state, { aggregateId, payload: { playerId } }) => ({
    id: aggregateId,
    playerId,
    ownerId: null
  })
}