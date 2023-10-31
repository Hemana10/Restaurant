import cutleryIcon from '../../assets/images/cutlery.png';

const RestaurantFooterSection = () => {
    return (
        <div className="fixed inset-x-0 bottom-0 z-10 pointer-events-none">
            <div className="h-16 z-[1] relative ">
                <button className="rounded-3xl bg-purple-800 text-sm absolute top-0 w-[9.375rem] h-10 pointer-events-auto left-2/4 flex items-center justify-center">
                    <span>
                        <img src={cutleryIcon} alt='cutlery-Icon' className='h-4 w-4 bg-transparent mr-1' />
                    </span>
                    <span className="text-white font-bold">BROWSE MENU</span>
                </button>
            </div>
        </div>
    );
};

export default RestaurantFooterSection;