const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
// @route     GET api/contacts
// @desc      Get all user's contacts
// @access    Private

const User = require('../models/User');
const Contact = require('../models/Contact');

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({user: req.user.id}).sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/contacts
// @desc      Get all user's contacts
// @access    Private

router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route     PUT api/contacts/:id
// @desc      Update contacts
// @access    Private

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route     DELETE api/contacts/:id
// @desc      delete contact
// @access    Private

router.delete('/:id', (req, res) => {
  res.send('Update contact');
});

module.exports = router;