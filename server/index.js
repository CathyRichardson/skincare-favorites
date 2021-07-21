const express = require("express");
const { getProducts,
    addNewProduct,
    updateProduct,
    deleteProduct } = require('./controllers/favoritesController')

const app = express();

app.use(express.json());

app.get('/api/favorites', getProducts);
app.post('/api/favorites', addNewProduct);
app.put('/api/favorites/:id', updateProduct);
app.delete('/api/favorites/:id', deleteProduct);

app.listen(5050, () => console.log('listening on port 5050'));