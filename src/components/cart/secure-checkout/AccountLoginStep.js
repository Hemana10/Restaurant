const AccountLoginStep = ({ stepNumber }) => { 

    const activeStep = (
        <div className="h-[250px] bg-white pl-[40px] pt-[35px] pb-[39px]">
            <div className="grid grid-cols-12">
                <div className="flex flex-col col-span-9">
                    <div className="flex flex-col flex-col-span-12">
                        <span className="text-2xl text-purplelake font-bold">Account</span>
                        <span className="pt-2 text-xl">To place your order now, log in to your existing account or sign up.</span>
                    </div>
                    <div className="flex-col-span-12 pt-[40px] flex">
                        <button className="flex flex-col px-6 py-1 mr-5 border-2 border-purple-400 items-center text-purple-400">
                            <span className="font-semibold">Have an account?</span>
                            <span className="font-bold text-lg">LOG IN</span>
                        </button>
                        <button className="flex flex-col px-9 py-1 border-2 bg-purple-400 items-center text-white">
                            <span className="font-semibold">New to FOOD?</span>
                            <span className="font-bold text-lg">LOG IN</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
                    <img class="_1W4Wt" imageid="Image-login_btpq7r" height="200" width="200" imageurl="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
                </div>
            </div>
        </div>
    );

    const inActiveStep = (
        <div className="h-[100px] bg-white pl-[40px] pt-[35px] pb-[39px]">
            <div className="grid grid-cols-12">
                <div className="flex flex-col col-span-12">
                    <span className="text-2xl text-purplelake font-bold">Account</span>
                </div>
            </div>
        </div>
    );

    const renderAccountLoginStep = stepNumber === 1 ? activeStep : inActiveStep;

    return (
        <>{renderAccountLoginStep}</>
    );
};

export default AccountLoginStep;