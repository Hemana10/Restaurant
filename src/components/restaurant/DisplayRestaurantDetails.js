import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ShimmerPostDetails } from "react-shimmer-effects";

import ErrorPage from '../miscellaneous/ErrorPage';
import CategorySection from './CategorySection';
import BackToTop from '../../shared/BackToTop';
import OffersSection from './OffersSection';
import RestaurantHeaderSection from './RestaurantHeaderSection';

const DisplayRestaurantDetails = () => {
    const { restaurantDetails, loading, error } = useSelector((state) => {
        return state.restaurantDetails;
    });
    
    const displayError = <ErrorPage error={error.errorMsg} />;

    const displayLoading = (
        <div className='grid grid-cols-8 mt-6'>
            <div className='col-start-2 col-span-6'>
                <ShimmerPostDetails variant='SIMPLE' />
            </div>
        </div>
    );

    const menuSection = restaurantDetails?.menuDetails?.map((menuItem, index) => {
        const { title, categories } = menuItem.card.card || {};
        if(menuItem.card.card['@type'].includes('ItemCategory')) {
            const itemAccordionView = !menuItem.card.card['@type'].includes('NestedItemCategory');
            return (
                <CategorySection key={`${title}${index}`} categoryTitle={title} categoryList={itemAccordionView ? [menuItem.card.card] : categories} 
                itemAccordionView={itemAccordionView}/>
            );
        }
    });

    const displayRestaurantDetails = (
        <div className='grid grid-cols-8 mt-6'>
            <div className='col-start-2 col-span-6'>
                <div className='mb-5'>
                    <RestaurantHeaderSection restaurantInfo={restaurantDetails?.restaurantInfo}/>
                </div>
                <hr />
                <div className='mb-9'>
                    <OffersSection offerDetails={restaurantDetails?.offerDetails}
                     restaurantInfo={restaurantDetails?.restaurantInfo}/>
                </div>
                <hr className='pt-3'/>
                <div className='mb-3 pt-3'>
                    {menuSection}
                </div>
            </div>
        </div>
    );

    const displayDetails = (loading && displayLoading) || (error.errorStatus && displayError) || displayRestaurantDetails;

    return (
        <Fragment>
            {displayDetails}
            <BackToTop />
        </Fragment>
    );
};

export default DisplayRestaurantDetails;