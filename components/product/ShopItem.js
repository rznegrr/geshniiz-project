import { formatPrice } from "../../utils/priceUtiles";

const ShopItem = (props) => {
    const { title, quantity, price, detail} = props.items

    return (
        <div className="bg-white py-2 shadow-md rounded-xl lg:h-36 xl:w-60 box-border md:pr-1 relative mb-1 overflow-hidden">
            <div
                className="md:pr-4 product-info mt-5 ml-2"
            >
                <div>
                    <p className="font-semibold cursor-pointer text-right">
                        {title}
                    </p>
                    <p className="font-light text-gray-400 text-xs mt-3 truncate">
                        {detail}
                    </p>
                </div>
                <div className="flex justify-between mt-6">
                    <span className="text-sm special flex flex-col">
                        {formatPrice(price)} تومان
                    </span>
                    <div className="ml-2">{quantity}</div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;