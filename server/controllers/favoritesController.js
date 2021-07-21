const {favoritesArr} = require('../favoritesData');
let id = 11; //make sure this is larger than last id in data file

getProducts = (req, res) => {
    res.status(200).send(favoritesArr);
}

addNewProduct = (req, res) => {
    const { type, name, picture } = req.body;
    const newProduct = { id, type, name, picture};
    favoritesArr.push(newProduct);
    id++;
    res.status(200).send(favoritesArr);
}

updateProduct = (req, res) => {
    res.status(200).send(favoritesArr);
}

deleteProduct = (req, res) => {
    res.status(200).send(favoritesArr);
}

module.exports = {
    getProducts,
    addNewProduct,
    updateProduct,
    deleteProduct
}