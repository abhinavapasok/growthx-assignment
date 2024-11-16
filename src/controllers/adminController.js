const Assignment = require('../models/Assignment');
const User = require('../models/User');

// Fetch all assignments assigned to the admin
exports.getAssignments = async (req, res) => {
  try {
    // Ensure the logged-in user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    const assignments = await Assignment.find({ adminId: req.user.id })
      .populate('userId', 'name email') // Include user details in the response
      .sort({ createdAt: -1 }); // Sort by newest assignments first

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Server error. Unable to fetch assignments.' });
  }
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    const { id } = req.params;

    const assignment = await Assignment.findOne({ _id: id, adminId: req.user.id });
    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found.' });
    }

    if (assignment.status !== 'pending') {
      return res.status(400).json({ error: 'Assignment already processed.' });
    }

    assignment.status = 'accepted';
    await assignment.save();

    res.status(200).json({ message: 'Assignment accepted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error. Unable to accept assignment.' });
  }
};

// Reject an assignment
exports.rejectAssignment = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    const { id } = req.params;

    const assignment = await Assignment.findOne({ _id: id, adminId: req.user.id });
    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found.' });
    }

    if (assignment.status !== 'pending') {
      return res.status(400).json({ error: 'Assignment already processed.' });
    }

    assignment.status = 'rejected';
    await assignment.save();

    res.status(200).json({ message: 'Assignment rejected successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error. Unable to reject assignment.' });
  }
};
