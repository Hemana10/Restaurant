const StepRenderer = ({ activeFlag, stepName, children }) => {

    const inActiveStep = (
        <div className="h-[100px] bg-white pl-[40px] pt-[35px] pb-[39px]">
            <div className="grid grid-cols-12">
                <div className="flex flex-col col-span-12">
                    <span className="text-2xl text-purple-400 font-bold">{ stepName }</span>
                </div>
            </div>
        </div>
    );


    return (
        <>{ activeFlag ? children : inActiveStep}</>
    );
};

export default StepRenderer;