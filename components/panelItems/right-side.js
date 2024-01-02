import CallUs from "../icons/call-us";
import EditProfile from "../icons/edit-profile";
import Exit from "../icons/exit";
import Messages from "../icons/messages";
import ShoppingBasket from "../icons/shop-basket";
import Profile from "../ui/profile";
import RightSideItem from "./right-sideItem";

const RightSide = () => {
    return (
        <div className="col-span-1 md:col-span-3 xl:col-span-2 bg-main right-box">
            <Profile />
            <div className="user-acc mt-5 flex flex-col text-white text-xs lg:text-base">
                <RightSideItem desc={"ویرایش و تکمیل اطلاعات"} link={"dashboard"}><EditProfile /></RightSideItem>
                <RightSideItem desc={"سوابق خرید"} link={"purchases"}><ShoppingBasket /></RightSideItem>
                <RightSideItem desc={"تماس با پشتیبانی"} link={"call-us"}><CallUs /></RightSideItem>
                <RightSideItem desc={"پیام های دریافتی"} link={"messages"}><Messages /></RightSideItem>
                <div className="flex py-3 md:mr-7 exit items-center cursor-pointer">
                    <Exit/>
                    <a className="hidden md:block">خروج از حساب</a>
                </div>
            </div>
        </div>
    );
}

export default RightSide;