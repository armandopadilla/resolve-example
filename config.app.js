const appConfig = {
  //routes: 'client/routes.js',
  aggregates: [
    {
      name: 'AddDropPlayer',
      commands: 'common/aggregates/add_drop.commands.js',
      projection: 'common/aggregates/add_drop.projection.js'
    }
  ],
  readModels: [
    {
      name: 'AddDropPlayers',
      projection: 'common/read-models/add_drop.projection.js',
      resolvers: 'common/read-models/add_drop.resolvers.js',
      adapterName: 'default'
    }
  ]
}

export default appConfig
