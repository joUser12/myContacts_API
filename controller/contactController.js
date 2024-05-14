const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

// @desc Get all Contacts
// route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})


// @desc Get  Contact
// route GET /api/contact/:id
// @access Public

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact)
})

// @desc  create New Contact
// route POST /api/contacts
// @access Public

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All files are mandatory");
    }

    const contact = await Contact.create({
        name, email, phone
    })
    res.status(201).json(contact)
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