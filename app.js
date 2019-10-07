// require('./lib/utils');
const fs = require('fs')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const { readFile, writeFile } = require('./lib/utils')
const path = require('path')

const app = new Koa();
const router = new Router();
app.use(bodyParser());


// const getDataFromFile = function (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//       if (err) return reject(err);
//       console.log(data)
//       resolve(data)
//     })
//   })
// }

// router.get('/test', async (ctx, next) => {
//   let a = fs.readFileSync( './db/a.json');
//   console.log(JSON.parse(a))
//   console.log({
//     query: ctx.query,
//     querystring: ctx.querystring
//   })
//   ctx.response.type = 'application/json';
//   ctx.response.body = a;
//   await next();
// });

// router.get('/test/ab', async (ctx, next) => {
//   console.log(ctx.request.body)
//   let jj = {
//     a: {b: 1, c: 2},
//     d: 5
//   }
//   fs.writeFileSync("./db/1.json", JSON.stringify(jj))
//   ctx.response.type = 'application/json';
//   ctx.response.body = '{"a": "done"}';
//   await next();
// });

// router.post('/test/haha', async (ctx, next) => {

//   console.log('==================ff=============')
//   console.log(ctx.request.body)
//   ctx.response.type = 'application/json';
//   ctx.response.body = '{"a": "done"}';
//   await next();
// });

// router.post('/test/gg', async (ctx) => {
//   console.log('==================ff====jj=========')

//   ctx.response.type = 'application/json';
//   ctx.response.body = '{"a": "doness"}';
// })

router.post('/ajax/docInfo', async (ctx) => {
  console.log(JSON.stringify(ctx.request.body))
  await writeFile(path.resolve(__dirname, './db/model.json'), JSON.stringify(ctx.request.body))
  ctx.response.type = 'application/json';
  ctx.response.body = '{"a": "doness"}';
})

router.get('/ajax/docInfo', async (ctx) => {
  let responseData = {}
  await readFile(path.resolve(__dirname, './db/model.json')).then((data) => {
    responseData = data
  })
  ctx.response.type = 'application/json';
  ctx.response.body = responseData;
})

app.use(router.routes())

app.listen(3000);

