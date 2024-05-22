const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

// @desc Get all Contacts
// route GET /api/contacts
// @access private

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts)
})


// @desc Get  Contact
// route GET /api/contact/:id
// @access private

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
// @access private

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All files are mandatory");
    }

    const contact = await Contact.create(
        {
            name, email, phone,user_id:req.user.id
        })
    res.status(201).json(contact)
})


// @desc update Conatct
// route PUT /api/contacts/:id
// @access private

const updateContact = asyncHandler(async (req, res) => {
    console.log(req.params)
    const contact = await Contact.findById(req.params.id);
    console.log(req.body)
    if (!contact) {
        throw new Error("Contact not found")
    }

    if(contact.user._id.toString()!==req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other user contact")

    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact);
})


// @desc delete Contacts
// route DELETE /api/contacts/:id
// @access private

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found")
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `delete contact ${req.params.id}` })
})


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }