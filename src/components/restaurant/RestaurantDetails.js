import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setErrorState, setLoadingState, setRestaurantDetails } from "../../store/storeIndex";
import DisplayRestaurantDetails from './DisplayRestaurantDetails';

const RestaurantDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            dispatch(setLoadingState(true));
            let response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8758713&lng=77.66363439999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            if (response.ok) {
                response = await response.json();
                extractRestaurantDetails(response);
            } else {
                dispatch(setErrorState({ errorStatus: true, errorMsg: `Error ${response.status}` }));
            }
        } catch (error) {
            dispatch(setErrorState({ errorStatus: true, errorMsg: 'Something went wrong, please try later' }));
        }
    }

    const extractRestaurantDetails = (response) => {
        const menuDetails = response.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        const offerDetails = response.data.cards[1].card.card.gridElements.infoWithStyle.offers;
        const restaurantInfo = response.data.cards[0].card.card.info;
        dispatch(setRestaurantDetails({
            restaurantInfo,
            offerDetails,
            menuDetails
        }));
    };

    return (
        <DisplayRestaurantDetails />
    );
};

export default RestaurantDetails;