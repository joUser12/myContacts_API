// @desc Get all Contacts
// route GET /api/contacts
// @access Public

const getContacts = (req, res) => {
    res.status(200).json({ message: "get all contacts" })
}


// @desc Get  Contact
// route GET /api/contact/:id
// @access Public

const getContact = (req, res) => {
    res.status(200).json({ message: "get contact" })
}

// @desc  create New Contact
// route POST /api/contacts
// @access Public

const createContact = (req, res) => {
    // const { } = req.body
    res.status(201).json({ message: req.body })
}


// @desc update Conatct
// route PUT /api/contacts/:id
// @access Public

const updateContact = (req, res) => {
    res.status(200).json({ message: `update Contact${req.params.id}` })
}


// @desc delete Contacts
// route DELETE /api/contacts/:id
// @access Public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact ${req.params.id}` })
}


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }