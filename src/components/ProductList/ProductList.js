import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import {connect} from 'react-redux';

class ProductList extends Component {

    render() {
        return (
            <div>
                <ul>
                   {this.props.products.map((product, i) =>
                        <ProductListItem key={i} product={product} />
                   )} 
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => {
    return {
    products: reduxState.products
    };
}
export default connect(mapStateToProps)(ProductList);