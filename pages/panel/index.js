import PanelExit from "../../components/icons/panel-exit";
import RightSide from "../../components/panelItems/right-side";
import HeadTitle from "../../components/ui/headTitle";

const PanelPage = () => {
    return (
        <div>
            <HeadTitle title={'پنل کاربری'}/>
            <div className="grid grid-cols-12 h-screen mycustom">
            <RightSide />
                <div className="col-span-11 md:col-span-9 xl:col-span-10 left-box">
                    <div
                        className="flex flex-col items-center h-full justify-center"
                    >
                        <img
                            src="/images/panel-logo.svg"
                            className="w-60 h-60"
                            alt="panel-logo"
                        />
                        <span className="mt-6 text-xs lg:text-base font-bold special"
                        >از پنل سمت راست میتوانید اکانت خود را مدیریت کنید</span>
                    </div>
                </div>
            </div>
            <PanelExit/>
        </div>
    );
}

export default PanelPage;