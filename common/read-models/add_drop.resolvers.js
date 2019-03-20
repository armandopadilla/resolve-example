export default {
  all: async store => {
    return await store.find('AddDropPlayers', {}, null, { createdAt: 1 })
  }
}