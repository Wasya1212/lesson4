const Router = require('koa-router');

const { productsQuery: Product } = require('../modules/product/product.resolver');

const DB = require('../data/products.json');

const router = new Router();

router.get('/', async ctx => {
  const sliderProducts = await Product.getProducts({
    search: {
      status: "recommended"
    },
    limit: 3
  });

  console.log(sliderProducts);

  await ctx.render('pages/frontpage', {
    sliderProducts,
    // sliderProducts: DB.slider,
    topProducts: DB.topProducts,
    seasonProducts: DB.seasonProducts,
    specialProduct: DB.specialProduct,
    news: DB.news
  });
});

router.get('/products/product/:id', async ctx => {
  ctx.body = await Product.getProductById(ctx.params.id);
});

module.exports = router;