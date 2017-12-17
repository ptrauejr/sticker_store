import React, { Component } from 'react'

class Store extends Component {
    render() {
        return (
            <div>
                {this.props.products.map(product => {
                    return(<h2 key={product.id}>{product.name}</h2>)
                })}
            </div>
        )
    }
}

export default Store