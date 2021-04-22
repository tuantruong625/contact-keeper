const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../models/User')

const ContactSchema = mongoose.Schema({
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'users'
 },
 name: {
  type: String,
  required: true,
 },
 email: {
  type: String,
  required: true,
 },
 phone: {
  type: String,
 },
 type: {
  type: String,
  default: 'personal'
 },
 date: {
  type: Date,
  default: Date.now()
 },
})

module.exports = mongoose.model('contact', ContactSchema)