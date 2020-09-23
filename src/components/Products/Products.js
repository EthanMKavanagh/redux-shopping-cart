import React, { Component } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import {connect} from 'react-redux';

class Products extends Component {
    // TODO: Use the productReducer instead of state

    render() {
        return (
            <div>
                <h2>Products</h2>
                <ProductForm addNewProduct={this.addNewProduct} />
                <ProductList products={this.props.products} />
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
        products: reduxState.products
    };
}

export default connect(mapStateToProps)(Products);