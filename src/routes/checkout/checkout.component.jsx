import { useContext } from 'react'

import { CartContext } from "../../contexts/cart.context";

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                const {name, quantity, id} = cartItem
                return <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                    <span onClick={() => {removeItemFromCart(cartItem)}}>decrement</span>
                    <span onClick={() => {addItemToCart(cartItem)}}>increment</span>
                </div>
            })}
            <span className='total'>Total: 0</span>
        </div>
    );
};

export default Checkout;