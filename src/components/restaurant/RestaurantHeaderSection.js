import { Fragment } from 'react';

import rating from '../../assets/images/rating.png';
import info from '../../assets/images/info-icon.png';

const RestaurantHeaderSection = ({ restaurantInfo }) => {
    const { name, cuisines, areaName, sla, feeDetails,
         totalRatingsString, avgRatingString } =  restaurantInfo || {};

    return (
        <Fragment>
            <span className='text-purplelake text-xl font-bold mb-2'>
                {name}
            </span>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <span className='text-sm text-gray-400'>
                        {cuisines?.join(', ')}
                    </span>
                    <span className='text-sm mb-3 text-gray-400'>
                        {areaName}, {sla?.lastMileTravelString}
                    </span>
                    <div className='text-sm text-gray-400 flex'>
                        <img src={info} alt="info-icon"
                            className='w-4 h-4 mr-2 mt-1' />
                        {feeDetails?.message}
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='flex flex-col mr-6 text-xs items-center'>
                        <div className='border border-gray-300 p-2'>
                            <div className='text-purplelake flex  font-bold'>
                                <img src={rating} alt="rating-icon"
                                    className='w-4 h-4 mr-2' />
                                {avgRatingString}
                            </div>
                            <hr className='my-1' />
                            <span className='text-gray-400 font-bold'>
                                {totalRatingsString}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RestaurantHeaderSection;