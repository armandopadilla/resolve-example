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
      name: 'AddDropPlayer',
      projection: 'common/read-models/add_drop.projection.js',
      resolvers: 'common/read-models/add_drop.resolvers.js',
      adapterName: 'default'
    }
  ],
  viewModels: [
    {
      name: 'AddDropPlayer',
      projection: 'common/view-models/add_drop.projection.js',
      //serializeState: 'common/view-models/view-model-name.serialize_state.js',
      //deserializeState:
      //  'common/view-models/view-model-name.deserialize_state.js'
    }
  ],
  sagas: [
    {
      name: 'saga-name',
      cronHandlers: 'common/sagas/saga-name.cron.js',
      eventHandlers: 'common/sagas/saga-name.event.js'
    }
  ],
  redux: {
    reducers: { 'reducer-name': 'client/reducers/reducer-name.js' },
    middlewares: ['client/middlewares/middleware-name.js']
  }
}

export default appConfig
