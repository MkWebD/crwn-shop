import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import {selectCartItems} from '../../store/cart/cart.selector';
import {addItemToCart} from '../../store/cart/cart.action';
import {CategoryItem} from "../../store/categories/category.types";

import {Footer, Name, Price, ProductCardContainer} from './product-card.styles'
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";

type ProductCardProps = {
    product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    const {name, price, imageUrl} = product;
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;

