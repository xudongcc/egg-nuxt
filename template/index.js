// npm run dev DO NOT read this file

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 3000 // default to 3000
})
