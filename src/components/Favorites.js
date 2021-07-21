import axios from "axios";
import React from "react";

import Product from "./Product";

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

    render() {
        const { favorites } = this.state;
        return (
            <main>
                <section className="product-list">
                    {favorites.map(product => <Product product={product} key={product.id} />)}
                </section>
                <section className="new-product">
                    <button>New Product Button</button>
                </section>
            </main>
        );
    }
}

export default Favorites;