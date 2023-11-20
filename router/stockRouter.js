const express = require('express');
const router = express.Router();
const baseResponse = require('../config/baseResponse');
const response = require('../config/response');
const stockController = require('../controller/stockController');
// const pythonController = require('../controller/pythonController');
// const User = require('../schemas/userinfo');
// const common = require('../controller/common');

// const cors = require('cors');
// router.use(cors());

router.post('/search/:type', stockController.search);

module.exports = router;