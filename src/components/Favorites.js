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
                {favorites.map(product => <Product product={product} key={product.id} />)}
            </main>
        );
    }
}

export default Favorites;