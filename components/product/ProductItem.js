import { useDispatch } from "react-redux"
import { cartSliceAction } from "../../redux/shopcart-slice"
import { useState } from "react"
import Minus from "../icons/minus"
import Plus from "../icons/plus"

const ProductItem = (props) => {
    const { id, name, image, detail, price, calcPrice } = props.items
    const [inputValue, setInputValue] = useState(0)
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(cartSliceAction.addToCart({
            id,
            name,
            image,
            detail,
            price,
            calcPrice
        }))
        setInputValue(inputValue + 1)
    }

    const removeFromCart = () => {
        dispatch(cartSliceAction.removeFromCart(id))
        setInputValue(inputValue - 1)

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div
            className="md:col-span-6 col-span-12 2xl:col-span-4 lg:mt-5 mr-5 mt-5 r-handy md:mx-3 box-border lg:h-40"
        >
            <div className="grid grid-cols-12 bg-white py-2 shadow-md rounded-xl lg:h-36 lg:w-80 box-border md:pr-3 relative">
                <div
                    className="col-span-4 lg:col-span-3 lg:w-20 lg:h-20 mt-5 w-24 h-24 md:w-28 md:my-2 lg:mt-5 md:mr-2 mx-auto product-img"
                >
                    <img
                        src={image}
                        className="rounded-xl"
                        alt="prodcut-image"
                    />
                </div>
                <div
                    className="col-span-8 md:col-span-12 lg:col-span-9 md:pr-2 product-info lg:mr-4 mt-5 ml-2"
                >
                    <div>
                        <h5 className="font-semibold cursor-pointer">{name}</h5>
                        <p
                            className="font-light text-gray-400 text-sm mt-2 truncate pro-detail"
                        >
                            {detail}
                        </p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <span className="text-sm w-24 special">
                            {price} تومان
                        </span>
                        <div
                            className={`overflow-hidden flex add-cart-box justify-between ml-1 ${inputValue === 0 ? '' : 'addWidth'}`}
                        >
                            <button className="plus cursor-pointer"
                                onClick={addToCartHandler}
                            >
                                <Plus />
                            </button>

                            <input className="" value={inputValue} onChange={handleChange} />
                            
                            <button className={`minus cursor-pointer`}
                                onClick={removeFromCart}
                            >
                                <Minus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;