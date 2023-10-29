import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchDropDown = ({ searchTerm, restaurantList, setSearchTerm }) => {

    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener('click', handleOutSideClick, true);

        return ( () => {
            document.removeEventListener('click', handleOutSideClick, true);
        });
    }, []);

    const handleOutSideClick = (event) => {
        if (event.target?.className?.includes('search') ||
            event.target?.className?.includes('dropdown')) {
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    };

    const dropDownListClick = (id) => {
        navigate(`/restaurants/${id}`);
        setSearchTerm('');
        setShowDropDown(false);
    };

    const dropDownList = restaurantList?.map((restaurant, index) => {
        const { name, cuisines, id } = restaurant?.info || {};
        const renderCuisines = cuisines?.join(', ');

        return (
            <div className="dropdown truncate flex flex-col p-1 hover:bg-purple-100     
             hover:cursor-pointer" key={`${name}${index}`} 
             onClick={() => dropDownListClick(id)} onKeyDown={() => dropDownListClick(id)}>
                <span className="dropdown text-purple-800 text-base font-semibold" title={name}>{name}</span>
                <span title={renderCuisines} className="dropdown text-sm truncate">{renderCuisines}</span>
                <hr className="mt-2"/>
            </div>
        );
    });

    return (
        <Fragment>
            {   (showDropDown && searchTerm.length) ? 
                <div className="search-dropdown p-1">
                    {restaurantList.length ? dropDownList : <div>No Search Results</div>}
                </div> 
                : null
            }
        </Fragment>
    );
};

export default SearchDropDown;