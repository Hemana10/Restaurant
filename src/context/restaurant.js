import { createContext, useEffect, useState, useRef } from 'react';

export const RestaurantContext = createContext();

const Provider = ({ children }) => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [error, setError] = useState('');
    let originalRestaurantList = useRef();


    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        // Live data fetch from swiggy api
        // try {
        //     let res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9358189&lng=77.6178125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        //     if (res.ok) {
        //         res = await res.json();
        //         extractRestaurantListDetails(res.data.cards);
        //     } else {
        //         setError(`Error ${res.status}`);
        //     }
        // } catch (error) {
        //     setError('Something went wrong, please try later');
        // }

        // Firebase DB data
        try {
            let res = await fetch('https://auth-1a4d7-default-rtdb.firebaseio.com/restaurants.json');
            const data = await res.json();
            if (!data.error) {
                setRestaurantList(data);
                originalRestaurantList.current = data;
            } else {
                setError('Something went wrong, please try later');
            }
        } catch(error) {
            setError('Something went wrong, please try later');
        }
    };

    // Extracting restaurants from Live data fetched from swiggy api
    const extractRestaurantListDetails = (response) => {
        let restaurants = response.reduce((restaurants, card) => {
            if (card.card.card['@type'] === 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget' && card.card.card.gridElements.infoWithStyle['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle') {
                return [...restaurants, ...card.card.card.gridElements.infoWithStyle?.restaurants];
            }
            return restaurants;
        }, []);
        setRestaurantList(restaurants);
        originalRestaurantList.current = restaurants;
    };

    const valueToShare = {
        restaurantList,
        setRestaurantList,
        originalRestaurantList,
        error
    };

    return (
        <RestaurantContext.Provider value={valueToShare}>
            {children}
        </RestaurantContext.Provider>
    );
}

export default Provider;