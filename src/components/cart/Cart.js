import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import SecureCheckout from './secure-checkout/SecureCheckout';

const Cart = () => {
    const cartList = useSelector(state => state.cartDetails.cartList);

    const renderEmptyCart = !cartList.length && <EmptyCart />;
    const renderSecureCheckout = cartList.length && <SecureCheckout />;

    return (
        <>
            {renderEmptyCart}
            {renderSecureCheckout}
        </>
    );
};

export default Cart;