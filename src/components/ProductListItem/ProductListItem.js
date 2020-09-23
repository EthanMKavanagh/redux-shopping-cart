import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        
    }

    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price} <button 
                onClick={this.addProductToCart}
                >Add to Cart</button>
            </li>
        )
    }
}

export default connect()(withRouter(ProductListItem));