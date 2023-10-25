import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import ErrorPage from '../miscellaneous/ErrorPage';
import { ShimmerPostDetails } from "react-shimmer-effects";

const DisplayRestaurantDetails = () => {
    const { restaurantDetails, loading, error } = useSelector((state) => {
        return state.restaurantDetails;
    });

    const displayError = <ErrorPage error={errorMsg} />;
    const displayLoading = <ShimmerPostDetails variant='SIMPLE'/>;

    // const displayRestaurantDetails = ;

    const displayDetails = (loading && displayLoading) || (error.errorStatus && displayError) || restaurantDetails;

    return (
        <Fragment>
            {displayDetails}
        </Fragment>
    );
};

export default DisplayRestaurantDetails;