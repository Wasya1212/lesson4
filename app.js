const Koa = require('koa');
const json = require('koa-json');
const render = require('koa-ejs');
const serve = require('koa-static');

const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const router = require('./routes');

const { ejs: ejsConfig, app: appConfig } = require ('./config')

const app = new Koa();

render(app, ejsConfig);

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(json());
// app.use(errorHandler({ errorLogger: logger, logMethodName: 'error' }));
app.use(serve(appConfig.staticFilesDist));

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;