import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/food-logo.png';
import SignIn from './SignIn';
import Search from './search/Search';
import cartIcon from '../../assets/images/cart-icon.svg';
import homeIcon from '../../assets/images/home-icon.svg';
import contactUsIcon from '../../assets/images/contact-us-icon.svg';
import aboutUsIcon from '../../assets/images/about-us-icon.svg';
import CartPopUp from './CartPopUp';
import caratUp from '../../assets/images/up-carat-icon.svg';

function Header() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const cartItemsCount = useSelector(state => state.cartDetails.cartList.length);

    return (
        <Fragment>
            <div className='grid grid-cols-12 mt-1 '>
                <div className='col-span-6 flex items-center'>
                    <img src={logo} alt='logo' className='h-16 hover:cursor-pointer' onClick={() => { navigate('/home') }} />
                    <Search />
                </div>
                <div className='col-span-6 items-center justify-end flex text-purplelake text-bold text-base'>
                    <Link className='px-3'
                        to="/home" >
                        <img src={homeIcon} alt="home icon" className='h-8 w-8 ml-6' />
                    </Link>
                    <Link className='px-3' to="/cart">
                        <div onMouseLeave={() => setShowPopup(false)}
                            onMouseOver={() => setShowPopup(true)}>
                            <div>
                                <img src={cartIcon} alt="cart icon" className='h-8 w-8 relative ml-6' />
                                {cartItemsCount ?
                                    <div className='rounded-[50%] top-[14px] right-[261px] w-[21px] h-[21px] text-white bg-red-600 absolute font-semibold'>
                                        <span className='text-xs flex items-center justify-center 
                                        mt-[2.5px]'>{cartItemsCount > 9 ? '9+' : cartItemsCount}</span>
                                    </div> : null
                                }
                            </div>
                            {showPopup && cartItemsCount ?
                                <div onMouseLeave={() => setShowPopup(false)}
                                    onMouseOver={() => setShowPopup(true)}>
                                    <img src={caratUp} alt='carat up' className='absolute w-[20px] h-[16px] top-[43px] right-[276px]' />
                                    <CartPopUp />
                                </div>
                                : null
                            }
                        </div>
                    </Link>
                    <Link className='px-3'
                        to="/contact" >
                        <img src={contactUsIcon} alt="contact us icon" className='h-8 w-8 ml-6' />
                    </Link>
                    <Link className='px-3'
                        to="/about" >
                        <img src={aboutUsIcon} alt="about us icon" className='h-8 w-8 ml-6' />
                    </Link>
                    <SignIn />
                </div>
            </div>
            <div className='border-gradient mt-1'></div>
        </Fragment>
    );
}

export default Header;