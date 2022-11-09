const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const routes = require('./route')

server.use('/route', routes)

server.get('/', (req, res) => res.send('Welcome to the Anonymous'))

module.exports = server