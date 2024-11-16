const Assignment = require('../models/Assignment');
const User = require('../models/User');

exports.uploadAssignment = async (req, res) => {
  try {
    const { task, adminId } = req.body;

    const assignment = new Assignment({
      userId: req.user.id,
      adminId,
      task,
    });

    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ adminId: req.user.id }).populate('userId', 'name');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateAssignmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const assignment = await Assignment.findById(id);
    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }

    assignment.status = status;
    await assignment.save();

    res.status(200).json({ message: 'Assignment status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
