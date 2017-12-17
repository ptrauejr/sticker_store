import React from 'react'

const ProductsList = ({products}) =>
    <div>
        {products.map(product => {
            return(<h2 key={product.id}>{product.name}</h2>)
        })}
    </div>

export default ProductsList