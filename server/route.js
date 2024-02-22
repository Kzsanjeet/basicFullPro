const express = require('express');
const router = express.Router();
const {show,register,login}  = require('./controller');


router.route('/').get(show)
router.route('/register').post(register);
router.route('/login').post(login)

module.exports = router;                                                                                                         