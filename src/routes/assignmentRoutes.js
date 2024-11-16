const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { uploadAssignment, getAssignments, updateAssignmentStatus } = require('../controllers/assignmentController');
const router = express.Router();

router.post('/', authenticate, uploadAssignment);
router.get('/', authenticate, getAssignments);
router.post('/:id/status', authenticate, updateAssignmentStatus);

module.exports = router;
