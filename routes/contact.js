const express = require('express')
const router = express.Router()
const contactcontroller = require('../controllers/contactcontroller');

// Create a new contact
router.post('/createContact', contactcontroller.create);

// Retrieve a single contact with id
router.get('/getContact/:id', contactcontroller.findById);

// Update a contact with id
router.put('/updateContact/:id', contactcontroller.update);

// Delete a contact with id
router.delete('/deleteContact/:id', contactcontroller.delete);

module.exports = router