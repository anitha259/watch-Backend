const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/location');
const watchController = require('../Controllers/watch');
const brandController = require('../Controllers/brand');
const userController = require('../Controllers/user');
const menuItemsController = require('../Controllers/MenuItems');
const orderController = require('../Controllers/order');
const paymentGatewayController = require('../Controllers/Payment');

route.get('/location',locationController.getLocation);
route.get('/watch', watchController.getWatch);
route.get('/brand/:locId', brandController.getBrandByLocation);
route.post('/login', userController.userLogin);
route.post('/signup', userController.userSignUp);
route.post('/filter', brandController.brandFilter);
route.get('/brand/:resId', brandController.getBrandDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
route.post('/order', orderController.saveOrderDetails);
route.get('/order/:userId', orderController.getOrderByUserId);
route.post('/payment', paymentGatewayController.Payment);
route.post('/callback', paymentGatewayController.callback);

module.exports = route;