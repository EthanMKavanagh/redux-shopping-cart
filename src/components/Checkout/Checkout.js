import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page

    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                <ul>
                    <li>{this.props.checkout}</li>
                </ul>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        checkout: reduxState.checkout
    }
}
export default connect(mapStateToProps)(Checkout);