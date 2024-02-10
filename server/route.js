const express = require('express');
const router = express.Router();
const {show,register}  = require('./controller');


router.route('/').get(show)
router.route('/register').post(register);

module.exports = router;                                                                                                         