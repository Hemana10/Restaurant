import PaymentStep from "./PaymentStep";
import DeliveryAddressStep from './DeliveryAddressStep';
import AccountLoginStep from './AccountLoginStep';
import BillingDetails from './BillingDetails';

const SecureCheckout = () => {

    return (
        <>
            <div className='grid grid-cols-12 gap-10 pt-8 bg-gray-200 h-[100vh]'>
                <div className='col-start-2 col-span-7'>
                    <AccountLoginStep />
                    <DeliveryAddressStep />
                    <PaymentStep />
                </div>
                <div className="col-span-3">
                    <BillingDetails/>
                </div>
            </div>
        </>
    );
};

export default SecureCheckout;