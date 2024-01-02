import Layout from "../../../components/panelItems/layout";
import HeadTitle from "../../../components/ui/headTitle";

const DashboardPage = () => {
    return (
        <div>
            <HeadTitle title='ویرایش اطلاعات'/>
            <Layout>
                <svg
                    className="mx-auto invisible lg:visible"
                    fill="none"
                    height="48"
                    viewBox="0 0 436 48"
                    width="436"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.8322 48C33.2473 48 52.9973 36.4492 63.4963 17.7844V17.7844C69.6758 6.79857 81.3003 0 93.9049 0H356.486C368.301 0 379.269 6.13327 385.456 16.1995L388.768 21.5891C398.855 38.0006 416.737 48 436 48V48H0H11.8322Z"
                        fill="var(--boxPanel)"
                    ></path>
                </svg>
                <div className="content-box">
                    <div
                        className="flex justify-center items-center panel-title mx-auto"
                    >
                        <svg
                            className="ml-1 md:ml-2"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.06189 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.06189 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
                                fill="var(--mainOrange)"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                        <span className="special">ویرایش و تکمیل اطلاعات</span>
                    </div>
                    <div className="md:mt-5">
                        <form className="flex-col items-center justify-center">
                            <svg
                                fill="none"
                                className="mx-auto h-[32px] w-[32px] md:h-[50px] md:w-[50px]"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.06189 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.06189 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
                                    fill="var(--mainOrange)"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                            <input type="hidden" />
                            <button type="button" className="text-sm md:text-base upload px-5 py-1 md:py-2 special mt-4">
                                آپلود
                            </button>
                        </form>
                        <form
                            className="grid grid-cols-12 form-w mx-auto mt-4 md:mt-10 text-sm w-full lg:w-3/4 pr-3 text-center"
                        >
                            <div className="mt-3 ml-3 col-span-12 md:col-span-6">
                                <span className="block text-right text-black"
                                >نام و نام خانوادگی</span>
                                <input
                                    // value="کاربر ساده"
                                    className="form-style"
                                    placeholder=""
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="mt-3 ml-3 col-span-12 md:col-span-6">
                                <span className="block text-right text-black h7"
                                >شماره ثابت</span>
                                <input
                                    className="form-style"
                                    placeholder=""
                                    name="phone"
                                    maxLength="15"
                                    type="tel"
                                />
                            </div>
                            <div className="mt-3 md:mt-6 ml-3 col-span-12 md:col-span-6">
                                <span className="block text-right text-black h7">آدرس</span>
                                <input
                                    className="form-style"
                                    placeholder=""
                                    name="address"
                                />
                            </div>
                            <div className="mt-3 md:mt-6 ml-3 col-span-12 md:col-span-6">
                                <span className="block text-right text-black h7">ایمیل</span>
                                <input
                                    className="form-style"
                                    placeholder=""
                                    name="email"
                                    type="email"
                                />
                            </div>
                            <div className="mx-auto col-span-12">
                                <button className="text-white save-btn mt-6">ذخیره</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default DashboardPage;