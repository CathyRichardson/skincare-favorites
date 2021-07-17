const express = require("express");

const app = express();

app.use(express.json());

app.listen(5050, () => console.log('listening on port 5050'));