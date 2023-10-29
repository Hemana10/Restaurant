import DisplayRestaurant from './DisplayRestaurants';
import useRestaurantContext from '../../custom-hooks/useRestaurantContext';
import ErrorPage from '../../shared/ErrorPage';

import { Fragment } from 'react';

function Home() {

    const { restaurantList, error } = useRestaurantContext();

    return (
        <Fragment>
            {error.length ?
                <ErrorPage error={error} /> :
                <div className="my-10 mx-4">
                    <DisplayRestaurant restaurantList={restaurantList} />
                </div>
            }
        </Fragment>

    );
}

export default Home;