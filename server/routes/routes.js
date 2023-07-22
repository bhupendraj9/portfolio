const express = require('express');
const FormInput = require('../controller/FormInput');
const Router= express.Router();

Router.post('/contact',FormInput);

module.exports = Router;