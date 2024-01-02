import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const cartItems = useSelector(state => state.shopCart.item)
  const totalAmount = useSelector(state => state.shopCart.totalAmount)

  return (
    <div
      className={props.mainDiv}>
      <p className="py-4 border-b border-solid border-gray-300">
        لیست سفارشات
      </p>
      <div className="r-handy box-border product-bg xl:mr-[14px]">
        <ul>
          {cartItems.map((item) => (
            <ShopItem
              key={item.id}
              items={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                detail: item.detail,
                calcPrice: item.calcPrice
              }}
            />
          ))}
        </ul>
      </div>
      <div className={props.totalAmountDiv}>
        <div className="flex justify-between mx-10 md:mx-4 bg-white">
          <span className="font-semibold text-gray-800">جمع کل : </span>
          <p className="text-left">{totalAmount} تومان</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;