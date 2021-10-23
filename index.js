const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    console.log("runing server meehdi");
})
app.listen(port, () => {
    console.log("runing with port", port);
})