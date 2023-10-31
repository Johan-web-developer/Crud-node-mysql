const express = require('express');
const router = express.Router();


const CustomerController = require('../controllers/customerControllers')

router.get('/',  CustomerController.list);
router.post('/add', CustomerController.save);
router.get('/remove/:id', CustomerController.delete);
router.get('/update/:id', CustomerController.edit);
router.post('/update/:id', CustomerController.update);	

module.exports = router; 