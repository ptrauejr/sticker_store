import React, { Component } from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'
import axios from 'axios'

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

    onToken = (token) => {
        const data = {...token, cart: this.state.cart}
        axios({
            url: '/charges',
            method: 'POST',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
            }
        })
            .then(response => {
                
            })
    }

    render() {
        return (
            <div>
                <Cart cart={this.state.cart} onToken={this.onToken} />
                <ProductsList products={this.state.products} handleAdd={this.addToCart}
                              handleRemove={this.removeFromCart} />
            </div>
        )
    }
}

export default Store