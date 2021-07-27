import React from "react";
import './NewProductForm.css'

class UpdateProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //this puts the original name/image in the form when clicked
    //should we update backend to allow updating one at a time?
    componentDidMount(){
        const {product} = this.props
        this.setState({name: product.name, image: product.picture})
    }

    handleChange(event) {
        //destructure
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //destructure
        const { product, updateProduct, setUpdateFormMode } = this.props;
        const { name, image } = this.state;
        //make sure key name in body matches what's expected in backend
        const body = {
            name: name,
            picture: image,
        }
        updateProduct(product.id, body);
        setUpdateFormMode(false);
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="new-product-form">
                <label>
                    Product Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Product Image URL:
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UpdateProductForm;