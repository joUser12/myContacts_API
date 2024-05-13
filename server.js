const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(errorHandler)
const port = process.env.PORT || 5000;
app.use('/api/contacts', require('../mycontacts-backend/routes/contactRoutes'));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});