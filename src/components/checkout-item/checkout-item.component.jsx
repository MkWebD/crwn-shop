import {useContext} from 'react'
import {CartContext} from "../../contexts/cart.context";

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Arrow,
    Quantity,
    RemoveButton,
    Value
} from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)

    const removeItemHandler = () => removeItemFromCart(cartItem)

    const addItemHandler = () => addItemToCart(cartItem)

    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;