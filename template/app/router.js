module.exports = app => {
  app.get('*', 'nuxt.render')
}
