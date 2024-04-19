import PaymentStep from "./PaymentStep";
import DeliveryAddressStep from './DeliveryAddressStep';
import AccountLoginStep from './AccountLoginStep';
import BillingDetails from './BillingDetails';
import { useSelector } from "react-redux";

const SecureCheckout = () => {
    const stepNumber = useSelector(state => state.paymentDetails.paymentStep);

    return (
        <>
            <div className='grid grid-cols-12 gap-10 pt-8 bg-purple-100 h-[100vh]'>
                <div className='col-start-2 col-span-7'>
                    <AccountLoginStep stepNumber={stepNumber}/>
                    <DeliveryAddressStep stepNumber={stepNumber}/>
                    <PaymentStep stepNumber={stepNumber}/>
                </div>
                <div className="col-span-3">
                    <BillingDetails/>
                </div>
            </div>
        </>
    );
};

export default SecureCheckout;