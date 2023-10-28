import { Fragment } from "react";

const ItemSection = ({ itemsList }) => {

    const renderItemList = itemsList.map((item, index) => {
        const { name, description, price, imageId, inStock, isVeg } = item?.card?.info || {};
        return (
            <div>
                <div className="grid grid-cols-8 mb-4 mt-4">
                    <div className="col-span-6 flex flex-col">
                        <span className="text-purplelake font-semibold mb-1">{name}</span>
                        <span className="mb-3 text-sm">₹ {price / 100}</span>
                        <span className="text-gray-400 text-sm">{description}</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-end mr-5 mb-3">
                        <div className="relative">
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                                alt={name} className="h-44 w-48 rounded"/>
                            <div className="absolute bottom-neg-9p right-30p">
                                <button className="text-purplelake bg-purple-200 p-2 rounded hover:shadow-2xl shadow-violet-900 hover:bg-purple-300">
                                    <span>ADD +</span>
                                </button>
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