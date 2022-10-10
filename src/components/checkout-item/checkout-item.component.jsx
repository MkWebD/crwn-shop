import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

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
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))

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