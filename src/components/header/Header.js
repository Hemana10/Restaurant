import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/food-logo.png';
import SignIn from './SignIn';
import Search from './Search';

function Header() {
    return (
        <Fragment>
            <div className='grid grid-cols-12 mt-1 '>
                <div className='col-span-6 flex items-center'>
                    <img src={logo} alt='logo' className='h-16' />
                    <Search />
                </div>
                <div className='col-span-6 items-center justify-end flex'>
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