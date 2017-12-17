import React, { Component } from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'

class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products,
            cart: {
                items: {},
                total: 0
            }
        }
    }

    addToCart = (sku) => {
        let cart = this.state.cart
        cart.items[sku.id] = cart.items[sku.id] + 1 || 1
        cart.total += sku.price
        this.setState({ cart })
    }

    removeFromCart = (sku) => {
        let cart = this.state.cart
        if(sku.id in cart.items && cart.items[sku.id] > 0) {
            cart.items[sku.id] = cart.items[sku.id] - 1
            cart.total -= sku.price
            this.setState({ cart })
        }
    }

    render() {
        return (
            <div>
                <Cart cart={this.state.cart} />
                <ProductsList products={this.state.products} handleAdd={this.addToCart}
                              handleRemove={this.removeFromCart} />
            </div>
        )
    }
}

export default Store