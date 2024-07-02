const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

// Create a new event
router.post('/', auth, createEvent);

// Get all events for the authenticated user
router.get('/', auth, getEvents);

// Update a specific event
router.put('/:id', auth, updateEvent);

// Delete a specific event
router.delete('/:id', auth, deleteEvent);

module.exports = router;
