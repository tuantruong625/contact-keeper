const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const Contact = require('../models/Contact')
const auth = require('../middleware/auth')

// @route GET api/contacts
// @description Get all users contacts
// @access Private
router.get('/', auth, async (req, res) => {
 try {
  const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
  res.json(contacts)
 } catch (e) {
  console.error(e.message)
  res.status(500).send('Server Error')
 }
});

// @route POST api/contacts
// @description Add new contact
// @access Private
router.get('/', (req, res) => {
 res.send('Add contact')
});

// @route PUT api/contacts/:id
// @description Update contact
// @access Private
router.put('/:id', (req, res) => {
 res.send('Update contact')
});

// @route DELETE api/contacts/:id
// @description Delete contact
// @access Private
router.delete('/:id', (req, res) => {
 res.send('Delete contact contact')
});

module.exports = router;