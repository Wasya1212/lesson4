const NewsService = require('./news.service');

const {
  PRODUCTS_NOT_FOUND
} = require('../../error-messages/news.messages');

function processNewsImage(image) {
  return image ? {
    link: `http://localhost:1337${image.url}`,
    alt: image.alternativeText || ''
  } : null
}

function parse(news) {
  return Object.assign({}, news, {
    preview: processNewsImage(news.preview)
  });
}

const newsQuery = {
  getNewsById: async (id) => {
    const { body: news } = await NewsService.getNewsById(id);
    return parse(news);
  },

  getNews: async (args = {}) => {
    const { body: news } = await NewsService.getNews(args);
    return news.map(parse);
  }
};

module.exports = {
  newsQuery
};