const express = require('express');
const RegisterUser = require('../controllers/RegisterUser');
const getUserRole = require('../controllers/getUserRole');
const createRazorpayOrder = require('../controllers/createRazorpayOrder');
const verifyRazorpayOrder = require('../controllers/verifyRazorpayOrder');
const storePayment = require('../controllers/storePayment');

const router = express.Router();


//Register
router.post('/register',RegisterUser);

//get-role
router.post("/get-role", getUserRole);


//payment-end points
router.post("/create-order",createRazorpayOrder);
router.post("/verify-order",verifyRazorpayOrder);
router.post("/store-payment",storePayment)



module.exports = router;