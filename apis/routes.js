


const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController');

//define a router and create routes
const router = express.Router();
const app = express();

//routes for dynamic processing of products
//-----------------------------------------------
router.get('/api/catalog', productController.getCatalog);
router.get('/api/article/:id', productController.getProductByID);


//route for registration 
router.post('/api/register', clientController.registerControl); 
//route for login 
router.post('/api/login', clientController.loginControl); 
//export router
module.exports = router;