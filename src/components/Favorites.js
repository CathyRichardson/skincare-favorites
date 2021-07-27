import axios from "axios";
import React from "react";

import Product from "./Product";
import NewProductForm from "./NewProductForm";


class Favorites extends React.Component {
    constructor() {
        super()

        this.state = {
            favorites: [],
            addFormMode: false,
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

    // If mode is true, set the addFormMode to true, else set to false. 
    setAddFormMode = (mode) => {
        this.setState({ addFormMode: mode })
    }

    //    //temporary test method to be deleted later
    //    testAxios = () => {
    //        let body = {
    //            type: "Puppy",
    //            name: "newPuppies",
    //            picture: "https://www.rover.com/blog/wp-content/uploads/2019/05/puppy-in-bowl.jpg"
    //        }
    //     this.addProduct(body)
    //    }


    render() {
        //destructuring from this.state 
        const { favorites, addFormMode } = this.state;

        //Could do this way instead of the ternary. Then call this function in return. 
        // const renderAddProduct = () => {
        //     if (addFormMode) {
        //         // return <NewProductForm />
        //         return <button onClick={() => this.setAddFormMode(false)}>form goes here</button>
        //     } else {
        //         return <button onClick={() => this.setAddFormMode(true)}>New Product Button</button>
        //     }
        // }

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
                    {
                        addFormMode
                            ? <NewProductForm addProduct={this.addProduct} setAddFormMode={this.setAddFormMode} />
                            // <button onClick={() => this.setAddFormMode(false)}>form goes here</button>
                            : <button onClick={() => this.setAddFormMode(true)}>Add a New Product</button>
                    }
                </section>
            </main>
        );
    }
}

export default Favorites;