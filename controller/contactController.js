const asyncHandler = require("express-async-handler")

// @desc Get all Contacts
// route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get all contacts" })
})


// @desc Get  Contact
// route GET /api/contact/:id
// @access Public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get contact" })
})

// @desc  create New Contact
// route POST /api/contacts
// @access Public

const createContact = asyncHandler(async (req, res) => {
    // const { } = req.body
    res.status(201).json({ message: req.body })
})


// @desc update Conatct
// route PUT /api/contacts/:id
// @access Public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update Contact${req.params.id}` })
})


// @desc delete Contacts
// route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete contact ${req.params.id}` })
})


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }