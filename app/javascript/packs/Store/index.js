import React, { Component } from 'react'
import ProductsList from './ProductsList'

class Store extends Component {
    render() {
        return (
            <div>
                <Cart />
                <ProductsList products={this.props.products} />
            </div>
        )
    }
}

export default Store