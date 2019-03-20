export default {
  players: async store => {
    return await store.find('AddDropPlayer', {}, null, { createdAt: 1 })
  }
}