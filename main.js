const express = require('express');
const {loadEnvFile} = require('node:process')
const path = require('node:path')

const messageRouter = require('./routes/messageRouter');

loadEnvFile();
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const Port = process.env.PORT || 8000; 


app.use('/', messageRouter);

app.listen(Port, () => {
    console.log("Server running. Listening to port ", Port );
}).on('error', (err) => {
    console.log(err.message);
})