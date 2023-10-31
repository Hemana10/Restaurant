import { useEffect, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setErrorState, setLoadingState, setRestaurantDetails } from "../../store/storeIndex";
import DisplayRestaurantDetails from './DisplayRestaurantDetails';
import { useMemo } from "react";

const RestaurantDetails = ({ id }) => {

    // const { id } = useParams();
    const dispatch = useDispatch();

    
    useEffect(() => {
        fetchData();
    }, [id]);

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

    // const fetchCallback = useCallback(fetchData, [id, dispatch, extractRestaurantDetails]);
    // const fetchDataMemo = useMemo(() => fetchData, [id]);

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

export default memo(RestaurantDetails);