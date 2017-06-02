const path = require('path')
const Nuxt = require('nuxt')

module.exports = app => {
  let nuxt

  (async () => {
    // Import and Set Nuxt.js options
    const config = require(path.resolve(process.cwd(), 'nuxt.config.js'))
    config.dev = !(app.config.env === 'prod')

    // Instanciate nuxt.js
    nuxt = await new Nuxt(config)

    // Build in development
    if (config.dev) {
      try {
        await nuxt.build()
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    }
  })()

  class NuxtController extends app.Controller {
    async render (ctx) {
      ctx.respond = false
      ctx.set = () => {}

      await nuxt.render(ctx.req, ctx.res)
    }
  }

  return NuxtController
}
