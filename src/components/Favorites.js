import axios from "axios";
import React from "react";

import Product from "./Product";
import NewProductForm from "./NewProductForm";


class Favorites extends React.Component {
    constructor() {
        super()

        this.state = {
            favorites: [],
        }
    }

    componentDidMount() {
        axios.get('/api/favorites')
            .then(({ data }) => this.setState({ favorites: data }))
            .catch(err => console.log(err));
    }

    addProduct = (body) => {
        axios.post(`/api/favorites/`, body)
            .then(({ data }) => this.setState({ favorites: data }))
            .catch(err => console.log(err))
    };

    updateProduct = (id, body) => {
        axios.put(`/api/favorites/${id}`, body)
            .then(({ data }) => this.setState({ favorites: data }))
            .catch(err => console.log(err))
    };

    deleteProduct = (id) => {
        axios.delete(`/api/favorites/${id}`)
            .then(({ data }) => this.setState({ favorites: data }))
            .catch(err => console.log(err))
    };

    render() {
        //destructuring from this.state 
        const { favorites } = this.state;

        return (
            <main>
                <section className="product-list">
                    {favorites.map(product => <Product
                        product={product}
                        key={product.id}
                        updateProduct={this.updateProduct}
                        deleteProduct={this.deleteProduct} />)}
                </section>
                <section className="new-product">
                    <NewProductForm addProduct={this.addProduct} />
                </section>
            </main>
        );
    }
}

export default Favorites;