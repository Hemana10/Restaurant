import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { updateItemList } from '../../store/storeIndex';
import plus from '../../assets/images/plus-icon.svg';
import minus from '../../assets/images/minus-icon.svg';

const ItemSection = ({ itemsList, menuIndex, categoryIndex, itemAccordionView }) => {
    const dispatch = useDispatch();

    const renderItemList = itemsList.map((item, index) => {
        const { name, description, price, imageId } = item?.card?.info || {};
        let quantity = item?.quantity;
        // inStock, isVeg

        const updateItemQuantity = (quantity) => {
            dispatch(updateItemList({
                menuIndex,
                categoryIndex: itemAccordionView ? null : categoryIndex,
                itemIndex: index,
                quantity: quantity
            }));
        }

        return (
            <div key={`${name}${index}`}>
                <div className="grid grid-cols-8 mb-4 mt-4">
                    <div className="col-span-6 flex flex-col">
                        <span className="text-purplelake font-semibold mb-1">{name}</span>
                        {price && <span className="mb-3 text-sm">₹ {price / 100}</span>}
                        <span className="text-gray-400 text-sm">{description}</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-end mr-5 mb-3">
                        <div className="relative">
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                                alt={name} className="h-44 w-48 rounded" />
                            <div className="absolute bottom-neg-9p right-30p">
                                <div className="text-purplelake bg-purple-200 p-2 rounded hover:shadow-2xl shadow-violet-90 hover:bg-purple-300">
                                {   quantity ?
                                    <div className="flex items-center">
                                        <span className="text-lg hover:cursor-pointer"
                                         onClick={() => updateItemQuantity(--quantity)}>
                                            <img src={minus} alt="minus icon"
                                                className="h-4 w-4"/>
                                         </span>
                                        <span className="px-4 text-lg">{quantity}</span>
                                        <span className="text-lg hover:cursor-pointer"
                                            onClick={() => updateItemQuantity(++quantity)}>
                                                <img src={plus} alt="plus icon"
                                                 className="h-4 w-4"/>
                                            </span>
                                    </div> :
                                    <div className="hover:cursor-pointer" onClick={() => updateItemQuantity(++quantity)}>ADD +</div>
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