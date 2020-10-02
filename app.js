const Koa = require('koa');
const Router = require('koa-router');
const json = require('koa-json');
const render = require('koa-ejs');
const serve = require('koa-static');

const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const { ejs: ejsConfig, app: appConfig } = require ('./config')

const DB = require('./data/products.json');

const app = new Koa();

render(app, ejsConfig);

const router = new Router();

router.get('/', async ctx => {
  await ctx.render('pages/frontpage', {
    sliderProducts: DB.slider,
    topProducts: DB.topProducts,
    seasonProducts: DB.seasonProducts,
    specialProduct: DB.specialProduct,
    news: DB.news
  });
});

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