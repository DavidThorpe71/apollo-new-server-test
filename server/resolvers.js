module.exports = {
  Query: {
    launches: (parent, args, ctx) => ctx.dataSources.launchAPI.getAllLaunches(),
    launch: (parent, { id }, ctx) =>
      ctx.dataSources.launchAPI.getLaunchById({ launchId: id }),
    me: (parent, args, ctx) => ctx.dataSources.userAPI.findOrCreateUser()
  }
};
