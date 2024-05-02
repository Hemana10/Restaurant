import StepRenderer from "./StepRenderer";

const DeliveryAddressStep = ({ stepNumber, className }) => { 
    const activeStep = (<>Active Delivery Address Step</>);

    return (
        <div className={className}>
            <StepRenderer stepName="Delivery address" activeFlag={stepNumber === 2}>
                { activeStep }
            </StepRenderer>
        </div>
    );
};

export default DeliveryAddressStep;