const superagent = require('superagent');
const { params } = require('../../routes');

class ProductService {
  async getProductById(id) {
    return superagent.get(`http://localhost:1337/products/${id}`);
  }

  async getProducts({ filters, limit, search, sort }) {
    const params = [];
    let query = 'http://localhost:1337/products';

    if (limit) {
      params.push(`_limit=${limit}`);
    }

    if (search) {
      Object.keys(search).forEach(key => {
        params.push(`${key}=${search[key]}`);
      });
    }

    if (params.length > 0) {
      query += '?' + params.join('&');
    }

    return superagent.get(query);
  }
};

module.exports = new ProductService();