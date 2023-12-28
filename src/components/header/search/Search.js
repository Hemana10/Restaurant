import { Fragment, useEffect, useRef, useState } from 'react';

import useRestaurantContext from '../../../custom-hooks/useRestaurantContext';
import SearchDropDown from './SearchDropDown';
// import useSearchDebounce from '../../../custom-hooks/useSearchDebounce';
import useDebounce from '../../../custom-hooks/useDebounce';
import useSearchDebounce from '../../../custom-hooks/useSearchDebounce';

const Search = () => {

    const [displaySearchTerm, setDisplaySearchTerm] = useState('');
    const [searchTerm, setSearchTerm] = useDebounce(500);
    const { restaurantList, setRestaurantList, originalRestaurantList } = useRestaurantContext();
    const count = useRef(-1);
    const searchTimer = useRef();

    const handleChange = (event) => {
        setDisplaySearchTerm(event.target.value);
        searchTimer.current = setSearchTerm(searchTimer.current, event.target.value);
    };

    useEffect(() => {
        getSearchResults();
    }, [searchTerm]);

    const getSearchResults = () => {
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
        ++count.current;
        console.log('search carried out', count);
        setRestaurantList(displaySearchTerm.length ? searchResultsList : originalRestaurantList.current);
    };

    return (
        <Fragment>
            <input type='text' placeholder='Search Resturant or Dish'
                value={displaySearchTerm} onChange={handleChange} className='ml-4 search' />
            <SearchDropDown searchTerm={searchTerm} restaurantList={restaurantList}
                setSearchTerm={setDisplaySearchTerm} />
        </Fragment>
    );
};

export default Search;