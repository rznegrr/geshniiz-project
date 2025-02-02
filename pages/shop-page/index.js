import Header from "../../components/layouts/header";
import PhoneMenu from "../../components/ui/phone-menu";
import HeadTitle from "../../components/ui/headTitle";
import Shop from "../../components/product/Shop";


const ShopPage = () => {

    return (
        <div>
            <HeadTitle title='سبد خرید'/>
            <Header />
            <Shop mainDiv="text-center" totalAmountDiv="py-4 bg-white border-t border-solid border-gray-300"/>
            <PhoneMenu />
        </div>
    );
}

export default ShopPage;