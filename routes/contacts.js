const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      Get all user's contacts
// @access    Private

router.get('/', (req, res) => {
  res.send('Get all user\'s contacts');
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