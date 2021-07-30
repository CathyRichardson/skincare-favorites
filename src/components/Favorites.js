import axios from "axios";
import React from "react";

import Product from "./Product";
import NewProductForm from "./NewProductForm";


class Favorites extends React.Component {
    constructor() {
        super()

        this.state = {
            favorites: [],
            search: '',
        }
    }

    componentDidMount() {
        axios.get('/api/favorites')
            .then(({ data }) => this.setState({ favorites: data }))
            .catch(err => console.log(err));
    }

    handleSearchChange = (event) => {
        const { value } = event.target;
        this.setState({ search: value });
    }

    searchProducts = () => {
        const { search } = this.state;
        axios.get(`/api/favorites?search=${search}`)
            .then(({ data }) => this.setState({ favorites: data }))
            .catch(err => console.log(err));
    }

    resetSearchProducts = () => {
        this.setState({ search: '' })
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
            <>
                <section className="search" >
                    <label>
                        Search Products:&nbsp;
                        <input type="text" value={this.state.search} onChange={this.handleSearchChange} />
                    </label>
                    <button onClick={this.searchProducts}>Search</button>
                    <button className={`reset-${this.state.search.length > 0 ? 'visible' : 'hidden'}`} onClick={this.resetSearchProducts}>Reset</button>
                </section>
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
            </>
        );
    }
}

export default Favorites;