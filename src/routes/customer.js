const express = require('express');
const router = express.Router();


const CustomerController = require('../controllers/customerControllers')

router.get('/',  CustomerController.list);

module.exports = router; 