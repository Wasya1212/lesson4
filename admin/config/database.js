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
  }
});
