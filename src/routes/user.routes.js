const { Router } = require('express');
const { createUser } = require('../controllers/user.controllers');
const router = Router();
router.post('https://api.demoblaze.com/signup', createUser)