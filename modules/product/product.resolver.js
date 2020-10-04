const ProductService = require('./product.service');

const {
  PRODUCTS_NOT_FOUND
} = require('../../error-messages/product.messages');

function processProductImage(image) {
  return image ? {
    link: `http://localhost:1337${image.url}`,
    alt: image.alternativeText || ''
  } : null
}

function parse(product) {
  return Object.assign({}, product, {
    image: processProductImage(product.image),
    largeImage: processProductImage(product.largeImage)
  });
}

const productsQuery = {
  getProductById: async (id) => {
    const { body: product } = await ProductService.getProductById(id);
    return parse(product);
  },

  getProducts: async (args = {}) => {
    const { body: products } = await ProductService.getProducts(args);
    return products.map(parse);
  }
};

module.exports = {
  productsQuery
};