const { Router } = require('express');
const { createUser } = require('../controllers/user.controllers');
const router = Router();
router.post('/api.demoblaze.com/signup', createUser)


module.exports = router;