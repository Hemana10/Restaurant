import { useSelector } from "react-redux";

const CartPopUp = () => {
    const cartList = useSelector(state => state.cartDetails.cartList);
    let subTotal = 0;

    const renderCartList = cartList.map(item => {
        const { id, name, price, defaultPrice, imageId } = item?.card?.info || {};
        let quantity = item?.quantity;

        subTotal += (((price ? price : defaultPrice) / 100) * quantity);
        subTotal = +subTotal.toFixed(2);

        return (
            <div className="flex justify-between items-center py-2" key={id}>
                <div className="flex items-center">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                        alt={name} className="h-[50px] w-[50px] mr-2" />
                    <div className="truncate font-semibold w-[122.81px]" title={`${quantity} x ${name}`}>{quantity} x {name}</div>
                </div>
                <div className="flex items-center">
                    <span className="text-sm flex ml-2 ">
                        <span className="pr-1">₹</span>
                        <span>{(price ? price : defaultPrice) / 100}</span>
                    </span>
                </div>
            </div>
        );
    })

    return (
        <div className='cart-popup text-black text-sm'>
            <div className="mx-[15px] my-[26px]">
                {renderCartList}
                <div className="flex justify-between pt-3">
                    <div className="flex flex-col">
                        <span className="font-semibold">Sub total</span>
                        <span className="text-gray-500">Extra charges may apply</span>
                    </div>
                    <span className="flex items-center ">₹ {subTotal}</span>
                </div>
                <div className="flex justify-center pt-5">
                    <button className="bg-fuchsia-950 w-[250px] text-white font-semibold p-3">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default CartPopUp;