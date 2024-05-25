const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

const app = express();
connectDb();// 
app.use(express.json());
app.use(errorHandler)
const port = process.env.PORT || 5000;
app.use('/api/contacts', require('./routes/contactRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});