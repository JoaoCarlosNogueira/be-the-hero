const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
/**
 * Tipos de parâmetros: 
 * Query: Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * Driver: Select * from users
 * Query Builder: table('users').select('*').where()
 */
 app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);