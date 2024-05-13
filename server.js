const express = require("express");
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;
app.use('/api/contacts', require('../mycontacts-backend/routes/contactRoutes'));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});