const superagent = require('superagent');
const { params } = require('../../routes');

class NewsService {
  async getNewsById(id) {
    return superagent.get(`https://mirai-restaurant-admin.herokuapp.com/articles/${id}`);
  }

  async getNews({ filters, limit, search, sort }) {
    const params = [];
    let query = 'https://mirai-restaurant-admin.herokuapp.com/articles';

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

module.exports = new NewsService();