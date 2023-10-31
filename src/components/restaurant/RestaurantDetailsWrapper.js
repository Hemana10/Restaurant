import { useParams } from "react-router-dom";

import RestaurantDetails from './RestaurantDetails';

const RestaurantDetailsWrapper = () => {

    const { id } = useParams();

    return (
        <RestaurantDetails id={id}/>
    );
}

export default RestaurantDetailsWrapper;