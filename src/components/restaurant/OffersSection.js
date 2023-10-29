import Carousel from '../../shared/Carousel';
import timer from '../../assets/images/timer.svg';
import rupee from '../../assets/images/rupee-icon.svg';

const OffersSection = ({ offerDetails, restaurantInfo }) => {
    const settings = {
        infinite: false,
        dots: true,
        slidesToShow: offerDetails?.length >= 4 ? 4 : offerDetails?.length === 3 ? 3 : 2,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
 
    };
    const { sla, costForTwoMessage } = restaurantInfo || {};

    const renderOffers = offerDetails?.map(({ info }) => {
        return (
            <div key={info?.restId} className='flex flex-col text-xs my-4 border border-gray-300 p-1 py-2'>
                <div className='flex'>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${info?.offerLogo}`}
                     alt={info?.header} className='h-6 w-6 mr-1'/>
                    <span className='mt-1'>{ info?.header }</span>
                </div>
                <div>
                    <span className='pl-2 mt-2'>{ info?.couponCode }</span> | <span>{ info?.description }</span>
                </div>
            </div>
        );
    });

    return (
        <div className='my-4'>
            <div className='flex my-2 font-bold text-sm text-purplelake'>
                <div className='flex mr-6'>
                    <img src={timer} alt='timer icon' className='mr-2'/>
                    <span>{ sla?.slaString }</span>
                </div>
                <div className='flex'>
                    <img src={rupee} alt='rupee icon' className='mr-2'/>
                    <span>{ costForTwoMessage }</span>
                </div>
            </div>
            <Carousel settings={settings}>{ renderOffers }</Carousel>
        </div>
    );
};  

export default OffersSection;