const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const serve = require('koa-static')
const cors = require('@koa/cors')
const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()
const compress = require('koa-compress')
const PORT = 3000

let ab = 'no scaned'

app.use(cors())
app.use(serve('dist'))
const options = { threshold: 2048 }
app.use(compress())
app.use(views(path.resolve(__dirname, './dist')))
app.use(async function (ctx, next) {
    console.log(ctx.path)
    console.log(ctx.query)
    if(ctx.path === '/user') {
        ctx.response.body = ab
    } else if (ctx.path === '/scan') {
        ab = 'scaned'
    } else {
        return await ctx.render('index')
    }
    next()
})


app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
