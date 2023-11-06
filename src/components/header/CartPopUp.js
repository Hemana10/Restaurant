import { useSelector } from "react-redux";

const CartPopUp = () => {
    const cartList = useSelector(state => state.cartDetails.cartList);
    let subTotal = 0;

    const renderCartList = cartList.map(item => {
        const { id, name, price, imageId } = item?.card?.info || {};
        let quantity = item?.quantity;

        subTotal += (price/100) * quantity;

        return (
            <div className="flex items-center py-2" key={id}>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                    alt={name} className="h-[50px] w-[50px] mr-2" />
                    <span className="truncate font-semibold" title={`${quantity} x ${ name }`}>{quantity} x { name }</span>
                    <span className="text-sm flex ml-2 ">
                        <span>₹ </span>
                        <span>{price / 100}</span>
                    </span>
            </div>
        );
    })

    return (
        <div className='cart-popup px-[15px] py-[26px] text-black text-sm'>
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
    );
};

export default CartPopUp;