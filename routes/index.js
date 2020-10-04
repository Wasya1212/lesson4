const Router = require('koa-router');

const { productsQuery: Product } = require('../modules/product/product.resolver');
const { newsQuery: News } = require('../modules/news/news.resolver');

const DB = require('../data/products.json');

const router = new Router();

router.get('/', async ctx => {
  const sliderProducts = await Product.getProducts({ search: { status: "recommended" }, limit: 3 });
  const topProducts = await Product.getProducts({ search: { status: "top" }, limit: 6 });
  const seasonProducts = await Product.getProducts({ search: { status: "season" }, limit: 6 });
  const specialProducts = await Product.getProducts({ search: { status: "special" }, limit: 1 });
  const news = await News.getNews({ limit: 8 });

  await ctx.render('pages/frontpage', {
    sliderProducts,
    topProducts,
    seasonProducts,
    specialProduct: specialProducts[0],
    news: DB.news
  });
});

router.get('/products/product/:id', async ctx => {
  ctx.body = await Product.getProductById(ctx.params.id);
});

module.exports = router;