const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection')
const routes = express.Router();

routes.post('/session',SessionController.create);
routes.post('/ongs',OngController.creat);
routes.get('/ongs',OngController.index);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.creat);
routes.delete('/incidents/:id',IncidentController.delete)
module.exports = routes