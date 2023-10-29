import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/food-logo.png';
import SignIn from './SignIn';
import Search from './search/Search';

function Header() {
    const navigate = useNavigate();

    return (
        <Fragment>
            <div className='grid grid-cols-12 mt-1 '>
                <div className='col-span-6 flex items-center'>
                    <img src={logo} alt='logo' className='h-16 hover:cursor-pointer' onClick={() => {navigate('/home')}}/>
                    <Search />
                </div>
                <div className='col-span-6 items-center justify-end flex text-purplelake text-bold text-base'>
                    <Link className='px-3'
                        to="/home" >Home
                    </Link>
                    <Link className='px-3'
                        to="/contact" >Contact Us
                    </Link>
                    <Link className='px-3'
                        to="/about" >About Us
                    </Link>
                    <SignIn />
                </div>
            </div>
            <div className='border-gradient mt-1'></div>
        </Fragment>
    );
}

export default Header;