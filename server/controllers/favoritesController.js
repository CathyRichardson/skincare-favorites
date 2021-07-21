const { favoritesArr } = require('../favoritesData');
let id = 11; //make sure this is larger than last id in data file

getProducts = (req, res) => {
    res.status(200).send(favoritesArr);
}

addNewProduct = (req, res) => {
    const { type, name, picture } = req.body;
    const newProduct = { id, type, name, picture };

    if (!type || !name || !picture) {
        res.status(409).send(`Missing type, name, or picture value`);
        return;
    }

    favoritesArr.push(newProduct);
    id++;
    res.status(200).send(favoritesArr);
}

updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, picture } = req.body;

    if (!name || !picture) {
        res.status(409).send(`Missing name or picture value`);
        return;
    }

    const index = favoritesArr.findIndex(product => product.id == id)
    if (index >= 0) {
        favoritesArr[index].name = name;
        favoritesArr[index].picture = picture;
        res.status(200).send(favoritesArr)
    } else {
        res.status(404).send(`Product id ${id} not found`);
    }
    
}

deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = favoritesArr.findIndex(product => product.id == id)
    if (index >= 0) {
       favoritesArr.splice(index, 1);
    res.status(200).send(favoritesArr); 
    } else {
        res.status(404).send(`Product id ${id} not found`);
    }
    
}

module.exports = {
    getProducts,
    addNewProduct,
    updateProduct,
    deleteProduct
}