const { Router } = require('express');
const { login } = require('../controllers/user.controllers')
const { User } = require('../models/users.models');
const router = Router();

router.post('/api.demoblaze.com/login', login)

module.exports = router;