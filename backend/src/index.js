const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes');
const app = express();

connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

app.listen(config.port, () =>
  console.log(`Server running on ${config.mode} at port ${config.port}`)
);
