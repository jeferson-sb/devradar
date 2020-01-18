const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const config = require('./config');
const connectDB = require('./config/db');
const { setupWebSocket } = require('./webSocket');

const app = express();
const server = http.Server(app);

connectDB();
setupWebSocket(server);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

server.listen(config.port, () =>
  console.log(`Server running on ${config.mode} at port ${config.port}`)
);
