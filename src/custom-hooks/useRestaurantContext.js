import { useContext } from "react";
import { RestaurantContext } from '../context/restaurant';


const useRestaurantContext = () => {
    return useContext(RestaurantContext);
};

export default useRestaurantContext;