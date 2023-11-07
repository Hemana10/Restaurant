import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateItemList } from '../../store/storeIndex';
import plus from '../../assets/images/plus-icon.svg';
import minus from '../../assets/images/minus-icon.svg';

const ItemSection = ({ itemsList, menuIndex, categoryIndex, itemAccordionView }) => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartDetails.cartList);

    const renderItemList = itemsList.map((item, index) => {
        const { id, name, description, price, defaultPrice, imageId } = item?.card?.info || {};

        const cartIndex = cartList.findIndex(v => v.card?.info?.id === id);

        let quantity = cartIndex > -1 ? cartList[cartIndex]?.quantity : item?.quantity;
        // inStock, isVeg

        const updateItemQuantity = (quantity) => {
            dispatch(updateItemList({
                menuIndex,
                categoryIndex: itemAccordionView ? null : categoryIndex,
                itemIndex: index,
                quantity,
                item,
                id
            }));
        }

        return (
            <div key={`${name}${index}`}>
                <div className="grid grid-cols-8 mb-4 mt-4">
                    <div className="col-span-6 flex flex-col">
                        <span className="text-purplelake font-semibold mb-1">{name}</span>
                        <span className="mb-3 text-sm">₹ {(price ? price : defaultPrice) / 100}</span>
                        <span className="text-gray-400 text-sm">{description}</span>
                    </div>
                    <div className={`col-span-2 flex items-center  mb-3 ${imageId ? 'justify-end mr-5' : 'justify-center ml-4'}`}>
                        <div className="relative">

                            {imageId ? <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} alt={name} className="h-44 w-48 rounded" /> : null}

                            <div className={imageId ? 'absolute bottom-neg-9p right-[21%]' : ''}>
                                <div className="text-purplelake bg-purple-200 p-2 rounded hover:shadow-2xl shadow-violet-90 hover:bg-purple-300">
                                    {quantity ?
                                        <div className="flex items-center w-[83.142px] h-[28px]">
                                            <span className="text-lg hover:cursor-pointer"
                                                onClick={() => updateItemQuantity(--quantity)}>
                                                <img src={minus} alt="minus icon"
                                                    className="h-4 w-4" />
                                            </span>
                                            <span className={`px-4 text-lg font-semibold 
                                            ${quantity < 10 ? 'pl-[22px]' : ''}`}>{quantity}</span>
                                            <span className="hover:cursor-pointer"
                                                onClick={() => updateItemQuantity(++quantity)}>
                                                <img src={plus} alt="plus icon"
                                                    className={`h-4 w-4 ${quantity < 10 ? 'ml-2' : ''}`} />
                                            </span>
                                        </div> :
                                        <div className="hover:cursor-pointer w-[83.142px] h-[28px] flex items-center justify-center" onClick={() => updateItemQuantity(++quantity)}>
                                            <span className="font-semibold">ADD</span>
                                            <span>
                                                <img src={plus} alt="plus icon"
                                                    className="h-4 w-4 ml-[5px]" />
                                            </span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {(index !== itemsList.length - 1) && <hr />}
            </div>

        );
    });

    return (
        <Fragment>
            {renderItemList}
        </Fragment>
    );
};

export default ItemSection;