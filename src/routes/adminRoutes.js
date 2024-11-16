const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const {
  getAssignments,
  acceptAssignment,
  rejectAssignment,
} = require('../controllers/adminController');

const router = express.Router();

router.get('/assignments', authenticate, getAssignments); // View assignments
router.post('/assignments/:id/accept', authenticate, acceptAssignment); // Accept an assignment
router.post('/assignments/:id/reject', authenticate, rejectAssignment); // Reject an assignment

module.exports = router;
