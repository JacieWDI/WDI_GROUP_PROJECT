module.exports = {
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || 'wdi-project-3',
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/wdip3-development',
    test: 'mongodb://localhost/wdip3-test'
  },
  //Below is to resolve mongod 4 issues with port on JC's mac
  env: process.env.NODE_ENV || 'development'
};
