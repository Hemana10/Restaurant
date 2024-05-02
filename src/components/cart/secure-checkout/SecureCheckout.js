import PaymentStep from "./payment-steps/PaymentStep";
import DeliveryAddressStep from './payment-steps/DeliveryAddressStep';
import AccountLoginStep from './payment-steps/AccountLoginStep';
import BillingDetails from './billing-details/BillingDetails';
import { useSelector } from "react-redux";

const SecureCheckout = () => {
    const stepNumber = useSelector(state => state.paymentDetails.paymentStep);

    return (
        <>
            <div className='grid grid-cols-12 gap-10 pt-8 bg-purple-100 h-[100vh]'>
                <div className='col-start-2 col-span-7'>
                    <AccountLoginStep className='pb-8' stepNumber={stepNumber}/>
                    <DeliveryAddressStep className='pb-8' stepNumber={stepNumber}/>
                    <PaymentStep className='pb-8' stepNumber={stepNumber}/>
                </div>
                <div className="col-span-3">
                    <BillingDetails/>
                </div>
            </div>
        </>
    );
};

export default SecureCheckout;