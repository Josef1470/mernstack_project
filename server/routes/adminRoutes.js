const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { adminCheck } = require('../middleware/adminCheck');
const { getAllUsers } = require('../controllers/adminController');
const router = express.Router();

router.get('/users', protect, adminCheck, getAllUsers);

module.exports = router;
