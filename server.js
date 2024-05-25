const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

const app = express();
connectDb();// 
app.use(express.json());
app.use(errorHandler)

app.use('/api/contacts', require('./routes/contactRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

app.get('/api/01', (req, res) => {
    res.send('Hello, World!');
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});