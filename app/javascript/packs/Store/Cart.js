import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Cart = ({cart, onToken}) => (
    <div className="cart">
        Total: ${cart.total/100}
        {cart.total > 0 &&
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_8ndRxC8GGO2deOHuyOEsVDGn"
                description="Stickers from stickers store"
                amount={cart.total}
                label="Checkout"
                billingAddres={true}
                shippingAddress={true} />
        }
    </div>
)

export default Cart