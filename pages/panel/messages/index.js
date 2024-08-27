import Layout from "../../../components/panelItems/layout";
import HeadTitle from "../../../components/ui/headTitle";

const Messages = () => {
    return (
        <div>
            <HeadTitle title='پیام های دریافتی' />
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
                <div
                    className="content-box h-fit w-4/5 lg:h-4/5 m-auto box-border shadow-sm"
                >
                    <div
                        className="flex justify-center items-center panel-title mx-auto"
                    >
                        <svg
                            className="ml-2"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.06043C4.26943 21 2.00043 18.74 2.00043 15.95V8.05C2.00043 5.26 4.25943 3 7.06043 3H16.9394ZM18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.50043 8.4C6.18943 8.17 5.75943 8.2 5.50043 8.47C5.23043 8.74 5.20043 9.17 5.42943 9.47L5.56043 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54Z"
                                fill="var(--mainOrange)"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                        <span className="special">پیام های دریافتی</span>
                    </div>
                    <div
                        className="grid grid-cols-12 rounded-xl h-40 mx-auto lg:bg-white lg:mt-8 box-msge lg:w-4/5 xl:w-9/12"
                    >
                        <div className="col-span-12 lg:col-span-4 lg:mt-5 mt-4">
                            <img
                                className="md:w-72 xl:w-48 rounded-xl mx-auto p-2 md:p-0 lg:p-1"
                                alt="notification"
                                src="/images/placeholder-4.png"
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="text-right flex-col mt-5 p-2">
                                <span className="h7 text-black">
                                    کاربر گرامی خوش آمدید
                                </span>
                                <p
                                    className="leading-loose mt-2 text-sm text-gray-400 text-justify md:w-96 lg:w-full"
                                >
                                    به منظور ارائه خدمات بهتر به شما مشتری عزیز لطفا از
                                    بخش ویرایش و تکمیل اطلاعات ، اطلاعات پروفایل خود را
                                    کامل کنید.
                                </p>
                                <span
                                    className="block text-left mt-4 ml-2 text-sm text-gray-400"
                                >
                                    11 اردیبهشت 1401
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>

    );
}

export default Messages;