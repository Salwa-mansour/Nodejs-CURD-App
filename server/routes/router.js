const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/',services.homeRouters)
 
route.get('/add-user',services.add_user)

 route.get('/update-user',services.update_user)

 // API
 route.post('/api/userdbs',controller.create);
 route.get('/api/userdbs',controller.find);
 route.put('/api/userdbs/:id',controller.update);
 route.delete('/api/userdbs/:id',controller.delete);
 

 module.exports = route;