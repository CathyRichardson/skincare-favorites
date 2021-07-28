import React from "react";
import UpdateProductForm from "./UpdateProductForm";

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            updateFormMode: false,
        }
    }

    // If mode is true, set the updateFormMode to true, else set to false. 
    setUpdateFormMode = (mode) => {
        this.setState({ updateFormMode: mode })
    }

    render() {
        // destructuring 
        const { product, updateProduct, deleteProduct } = this.props;
        const { updateFormMode } = this.state

        return (
            <div className="product">
                <h2>{product.type}</h2>
                <h3>{product.name}</h3>
                <img src={product.picture} alt="skincare product" className="product-image" />

                {updateFormMode
                    ? <UpdateProductForm
                        updateProduct={updateProduct}
                        product={product}
                        setUpdateFormMode={this.setUpdateFormMode}
                    />
                    : <div className="product-buttons">
                        <button onClick={() => this.setUpdateFormMode(true)}>Update Product</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
                    </div>
                }
            </div>
        );
    }
}

export default Product;