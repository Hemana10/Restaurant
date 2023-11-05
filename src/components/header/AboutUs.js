import React from 'react';
import { Fragment } from 'react';

import ErrorPage from '../../shared/ErrorPage';
import instaLogo from '../../assets/images/insta-icon.png';
import twitterLogo from '../../assets/images/twitter-icon.png';
import fbLogo from '../../assets/images/fb-icon.png';

class AboutUs extends React.Component {

    constructor() {
        super();
        this.state = {
            aboutUsInfo: {},
            errorState: {
                errorStatus: false,
                errorMsg: ''
            }
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/Hemana10");
            if (response.ok) {
                const data = await response.json();
                this.setState((prevState) => { return { ...prevState, aboutUsInfo: data } });
            } else {
                this.setState((prevState) => {
                    return {
                        ...prevState, errorState: {
                            errorStatus: true,
                            errorMsg: `Error ${response.status}`
                        }
                    }
                });
            }
        } catch (err) {
            this.setState((prevState) => {
                return {
                    ...prevState, errorState: {
                        errorStatus: true,
                        errorMsg: 'Something went wrong, please try later'
                    }
                }
            });
        }

    }

    render() {
        const { avatar_url, name, location } = this.state.aboutUsInfo;
        const { errorStatus, errorMsg } = this.state.errorState;

        return (
            <Fragment>
                {errorStatus ?
                    <ErrorPage error={errorMsg} /> :
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center my-10'>
                            <img src={avatar_url} alt='logo' className='h-80 pt-2' style={{ width: 320 }} />
                            <div className='dead-center'>
                                <span className='text-purplelake text-3xl font-semibold'>{name}</span>
                                <span className='text-purple-800 text-xl'>{location}</span>
                                <div className='flex pt-3'>
                                    <a href="https://instagram.com/reddyhemana?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer" ><img src={instaLogo} alt="insta-logo" className='h-8 w-8 mr-5 cursor-pointer' /></a>
                                    <a><img src={twitterLogo} alt="twitter-logo" className='h-8 w-8 mr-5 cursor-pointer' /></a>
                                    <a><img src={fbLogo} alt="fb-logo" className='h-8 w-8 cursor-pointer' /></a>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col py-11 about-gradient'>
                            <span className='text-purplelake text-6xl font-semibold pb-4'>About Us</span>
                            <span className='text-purple-800 text-xl pb-2'>Front-end Developer & Designer</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        </div>
                    </div>
                }
            </Fragment>

        );
    }
}

export default AboutUs;