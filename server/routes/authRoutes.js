const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

  
  
module.exports = router;
