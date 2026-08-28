const express = require('express');
const path = require('node:path')

const messageRouter = require('./routes/messageRouter');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use('/', messageRouter);

const Port = process.env.PORT || 8000; 

app.listen(Port, "0.0.0.0", () => {
    console.log("Server running. Listening to port ", Port );
}).on('error', (err) => {
    console.log(err.message);
})