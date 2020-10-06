module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb+srv://wasya1212:wasya1212@cluster0-v4ayb.mongodb.net/restaurant?retryWrites=true&w=majority"
      },
      options: {
        useNullAsDefault: true,
        ssl: true
      },
    },
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'dtquxmxcs',
      api_key: '219447449487377',
      api_secret: 'YsATAdSo0HSkKKu1Xhp9n4bV3js'
    }
  }
});
