const express = require("express");
const {favoritesArr} = require('./favoritesData')
const app = express();

app.use(express.json());

app.get('/api/favorites', (req, res) => {
    res.status(200).send(favoritesArr);
})

app.listen(5050, () => console.log('listening on port 5050'));