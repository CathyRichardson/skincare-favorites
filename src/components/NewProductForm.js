import React from "react";
import './NewProductForm.css';

class NewProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            name: '',
            image: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //destructure
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //destructure
        const { addProduct, setAddFormMode } = this.props;
        const { type, name, image } = this.state;
        //make sure key name in body matches what's expected in backend
        const body = {
            type: type,
            name: name,
            picture: image,
        }
        addProduct(body);
        setAddFormMode(false);
        event.preventDefault();
    }

    render() {


        return (
            <form onSubmit={this.handleSubmit} className="new-product-form">
                <label>
                    Product Type:
                    <input type="text" name="type" value={this.state.type} onChange={this.handleChange} />
                </label>
                <label>
                    Product Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Product Image URL:
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" className="new-product-submit"/>
            </form>
        );
    }
}

export default NewProductForm;