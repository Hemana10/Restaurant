import StepRenderer from "./StepRenderer";

const PaymentStep = ({ stepNumber, className }) => { 
    const activeStep = (<>Active Payment Step</>);

    return (
        <div className={className}>
            <StepRenderer stepName="Payment" activeFlag={stepNumber === 3}>
                { activeStep }
            </StepRenderer>
        </div>
    );
};

export default PaymentStep;