const http = require('http')
const url = require('url')
const path = require('path')
const serve = require('koa-static')
const cors = require('@koa/cors')
const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()
const compress = require('koa-compress')
const bodyParser = require('koa-bodyparser')
const fs = require('fs-extra')
const qr = require('qr-image')
const CryptoJS = require("crypto-js")
const PORT = 7000

let ab = 'no scaned'
let application_state = 'noscan'
app.use(bodyParser())
app.use(cors())
app.use(serve('src'))
const options = { threshold: 2048 }
app.use(compress())
app.use(views(path.resolve(__dirname, './src')))
app.use(async function (ctx, next) {
    console.log(ctx.path)
    console.log(ctx.query)
    console.log(ctx.request.body.params)

    // var bytes  = CryptoJS.AES.decrypt(ctx.request.body.params, '46cc793c53dc451b');
    // var plaintext = bytes.toString();
    // console.log(plaintext)
    if(ctx.path === '/user') {
        ctx.response.body = {
            state: 'success',
            txt: `
            <script type="text/javascript">
                window.token="${ctx.request.body.params.id}"
            </script>
            <script type="text/javascript" src="http://localhost:5000/index.js"></script>
            `
        }
        fs.writeFileSync(
            `${__dirname}/list/${ctx.request.body.params.id}`,
            `${JSON.stringify(ctx.request.body.params)}`
        )
    } else if (ctx.path === '/auther') {
        application_state = 'scan'
        ctx.body = 'scan';
    } else if (ctx.path === '/openscan') {
        application_state = 'noscan'
        ctx.body = {value: 'success'}
    } else if (ctx.path === '/scan') {
        console.log('application_state:',application_state)
        if (application_state === 'scan') {
            let contentText = fs.readFileSync(`${__dirname}/list/${ctx.query.token}`,'utf-8');
            console.log('=================')
            let obj = JSON.parse(contentText)
            let result = obj[ctx.query.type]
            console.log(obj)
            ctx.body = {value: result};
            application_state = 'noscan'
        } else {
            ctx.body = {value: 'wait'};
        }

    } else if (ctx.path === '/qr') {

        application_state = 'noscan'

        let param = ctx.query
        console.log(param.type)
        var img = qr.image(`http://localhost:7000/auther?type=${param.type}&token=${param.token}`,{size :10});
        ctx.type= 'image/png';
        ctx.body = img;

    } else {
        return await ctx.render('index')
    }
    next()
})


app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
