import React from "react";
import addressLogo from '../../assets/images/address-icon.png';
import phoneLogo from '../../assets/images/phone-icon.png';
import emailLogo from '../../assets/images/email-icon.png';

class ContactUs extends React.Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='text-purplelake text-5xl text-center font-semibold pt-6'>Contact Us</div>
                <div className="grid grid-cols-3 flex mt-32">
                    <div className="dead-center">
                        <img src={addressLogo} alt="address-logo" width='50px'
                            height='50px' />
                        <div className="dead-center mx-8 text-center pt-2">
                            <span className="text-base font-medium text-purple-900 pb-2">Address</span>
                            <span>Please visit our office in the below location to get our in-office assistance:</span>
                            <span className="font-semibold">
                                Koramangala, Bangalore
                            </span>
                        </div>
                    </div>
                    <div className="dead-center">
                        <img src={phoneLogo} alt="phone-logo" width='50px'
                            height='50px' />
                        <span className="text-base font-medium text-purple-900 py-2">Phone</span>
                        <span>(Monday to Friday, 9am to 4pm IST)</span>
                        <span>Bangalore Toll-Free:</span>
                        <span className="font-semibold">+91 9387583789</span>
                    </div>
                    <div className="dead-center">
                        <img src={emailLogo} alt="email-logo" width='50px'
                            height='50px' className="bg-transparent" />
                        <div className="dead-center mx-10 text-center pt-2">
                            <span className="text-base font-medium text-purple-900 pb-2">Email</span>
                            <span>
                                Please leave request/complain email to the below mail:
                            </span>
                            <span className="font-semibold">
                                support@food.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;