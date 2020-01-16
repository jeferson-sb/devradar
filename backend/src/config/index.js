const dotenv = require('dotenv');
dotenv.config({ path: 'src/config/.env' });

module.exports = {
  mode: process.env.NODE_ENV,
  port: process.env.PORT || 3333,
  dbUri: process.env.MONGODB_URI
};
