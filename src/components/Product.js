import React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // destructuring from this.props.product
        const { product } = this.props;
        return (
            <div className="product">
                <h2>{product.type}</h2>
                <h3>{product.name}</h3>
                <img src={product.picture} alt="skincare product" className="product-image" />
            </div>
        );
    }
}

export default Product;