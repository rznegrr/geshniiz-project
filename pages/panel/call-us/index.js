import CallUs from "../../../components/icons/call-us";
import Layout from "../../../components/panelItems/layout";
import HeadTitle from "../../../components/ui/headTitle";

const CallUS = () => {
    return (
        <div>
            <HeadTitle title='تماس با ما'/>
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
                        <CallUs />
                        <span className="special">تماس با پشتیبانی</span>
                    </div>
                    <form
                        className="grid grid-cols-12 form-w mx-auto xl:mt-10 text-sm w-full lg:w-3/4 px-4"
                    >
                        <div className="mt-2 md:ml-3 col-span-12 md:col-span-6">
                            <span className="block text-right text-black h7"
                            >نام و نام خانوادگی</span>
                            <input
                                className="form-style"
                                placeholder=""
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="mt-3 col-span-12 md:col-span-6">
                            <span className="block text-right text-black h7"
                            >شماره تماس</span>
                            <input
                                className="form-style"
                                placeholder=""
                                name="phone"
                                maxLength="15"
                                type="tel"
                            />
                        </div>
                        <div className="mt-7 col-span-12">
                            <span className="block text-right text-black h7">پیام شما</span>
                            <textarea
                                className="form-style"
                                cols="30"
                                rows="7"
                            ></textarea>
                        </div>
                        <div className="col-span-12 text-right">
                            <button className="text-white save-btn mt-2 md:mt-4">ارسال</button>
                        </div>
                    </form>
                </div>
            </Layout>
        </div>
    );
}

export default CallUS;