const express = require('express');
const {loadEnvFile} = require('node:process')

loadEnvFile();

const Port = process.env.PORT || 8000; 

const app = express();

app.get('/', (req, res) => {
    console.log("hello world"); 
    res.send('hello world')
})

app.listen(Port, () => {
    console.log("Server running. Listening to port ", Port );
}).on('error', (err) => {
    console.log(err.message);
})