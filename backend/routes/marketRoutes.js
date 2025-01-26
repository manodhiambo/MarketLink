const express = require('express');
const { submitMarketData } = require('../controllers/marketController');
const router = express.Router();

router.post('/submit', submitMarketData);

module.exports = router;
