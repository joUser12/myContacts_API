const express = require("express");
// const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

const app = express();
connectDb();// 
app.use(express.json());
// app.use(errorHandler)
const port = process.env.PORT || 5000;
app.use('/api/contacts', require('../mycontacts-backend/routes/contactRoutes'));
app.use('/api/users', require('../mycontacts-backend/routes/userRoutes'));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});