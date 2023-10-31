import { Fragment, useEffect } from 'react';

import useRestaurantContext from '../../../custom-hooks/useRestaurantContext';
import SearchDropDown from './SearchDropDown';
import useSearchDebounce from '../../../custom-hooks/useSearchDebounce';

const Search = () => {

    const [searchTerm, setSearchTerm] = useSearchDebounce(100);
    const { restaurantList,  setRestaurantList, originalRestaurantList } = useRestaurantContext();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        getSearchResults();
    }, [searchTerm]);

    const getSearchResults = () => {
        console.log('computing search results...');
        const searchResultsList = originalRestaurantList.current?.reduce((searchResultsList, restaurant) => {
            for (const item in restaurant.info) {
                if ((item === 'name' || item === 'cuisines')) {
                    let available = false;
                    if (typeof restaurant.info[item] === 'string'
                        && restaurant.info[item].toLowerCase().includes(searchTerm.toLowerCase())) {
                        available = true;
                    }
                    if (restaurant.info[item] instanceof Array
                        && restaurant.info[item].join('').toLowerCase().includes(searchTerm.toLowerCase())) {
                        available = true;
                    }
                    if (available) {
                        searchResultsList.push(restaurant);
                    }
                }
            }
            return searchResultsList;
        }, []);
        setRestaurantList(searchTerm.length ? searchResultsList : originalRestaurantList.current);
    };

    return (
        <Fragment>
            <input type='text' placeholder='Search Resturant or Dish'
                value={searchTerm} onChange={handleChange} className='ml-4 search' />
            <SearchDropDown searchTerm={searchTerm} restaurantList={restaurantList}
             setSearchTerm={setSearchTerm}/>
        </Fragment>
    );
};

export default Search;