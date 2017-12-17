import React from 'react'
import Sticker from './Sticker'

const Product = ({product}) =>
    <div className="product">
        <Sticker product={product} />
        <div clasName="cartControls">
            <button>+ Add to cart</button>
            <button>- Remove from cart</button>
        </div>

    </div>

export default Product