const superagent = require('superagent');
const { params } = require('../../routes');

class ProductService {
  async getProductById(id) {
    return superagent.get(`https://mirai-restaurant-admin.herokuapp.com/products/${id}`);
  }

  async getProducts({ filters, limit, search, sort }) {
    const params = [];
    let query = 'https://mirai-restaurant-admin.herokuapp.com/products';

    if (limit) {
      params.push(`_limit=${limit}`);
    }

    if (search) {
      Object.keys(search).forEach(key => {
        params.push(`${key}=${search[key]}`);
      });
    }

    if (sort) {
      params.push(`_sort=id:${sort}`);
    }

    if (params.length > 0) {
      query += '?' + params.join('&');
    }

    return superagent.get(query);
  }

  async getProductsCategories() {
    return superagent.get('https://mirai-restaurant-admin.herokuapp.com/categories');
  }
};

module.exports = new ProductService();