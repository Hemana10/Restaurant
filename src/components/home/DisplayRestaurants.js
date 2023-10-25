import { Fragment } from 'react';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import { useNavigate } from 'react-router-dom';

import rating from '../../assets/images/rating.png';

const DisplayRestaurant = ({ restaurantList }) => {

    const navigate = useNavigate();

    const cardClick = (id) => {
        navigate(`/restaurants/${id}`);
    };

    const renderRestaurantList = restaurantList?.map((restaurant, index) => {
        const { id, name, avgRating, sla,
            cloudinaryImageId, cuisines } = restaurant.info;
        const img = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
        const renderCuisines = cuisines.join(', ');

        return (
            <div key={`${id}${index}`}
                className="hover:cursor-pointer hover:shadow-2xl rounded-xl" 
                onClick={() => cardClick(id)}>
                <div className="flex items-center justify-center">
                    <img src={img} alt={name}
                        className="w-11/12 h-60 rounded-3xl py-3" />
                </div>
                <div className="truncate px-3 pb-2">
                    <span className="text-purple-800 text-xl font-semibold" title={name}>{name}</span><br />
                    <span title={renderCuisines}>{renderCuisines}</span><br />
                    <div className='flex py-1'>
                        <img src={rating} alt="rating-icon"
                            className='w-5 h-5' />
                        <span className='ml-2 mb-n2'>{avgRating}</span>
                    </div>
                    <span>{sla.slaString}</span>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            {(renderRestaurantList?.length) ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                    {renderRestaurantList}
                </div> :
                <ShimmerSimpleGallery id='display-resraurant' card imageHeight={240} col={4} caption rounded={true} />}
        </Fragment>
    );
};

export default DisplayRestaurant;