const express = require('express');

const routes = express.Router();

routes.get('/', (_request, response) =>
  response.send({ message: 'Test response' })
);

module.exports = routes;
