import axios from "axios";
import React from "react";

class Favorites extends React.Component {
    constructor() {
        super()

        this.state = {
            favorites: [],
        }
    }

    componentDidMount() {
        axios.get('/api/favorites')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Favorites Component</h1>
            </div>
        );
    }
}

export default Favorites;