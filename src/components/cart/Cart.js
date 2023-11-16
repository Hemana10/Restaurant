import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartList = useSelector(state => state.cartDetails.cartList);
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    };

    const renderEmptyCart = !cartList.length && (
        <div className='relative'>
            <div className='flex flex-col items-center justify-center'>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0' alt="empty cart" className='h-[256] w-[271px] mt-10' />
                <span className='text-xl font-bold my-3'>Your cart is empty</span>
                <spn className='mb-3'>You can go to home page to view more restaurants</spn>
                <button className='p-2 bg-fuchsia-950 mt-2' onClick={navigateToHome}>
                    <span className='font-bold text-white px-1'>See restaurants near you</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {renderEmptyCart}
        </>
    );
};

export default Cart;