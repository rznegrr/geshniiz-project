import Layout from "../../../components/panelItems/layout";
import HeadTitle from "../../../components/ui/headTitle";

const PurchasesPage = () => {
    return (
        <div>
            <HeadTitle title='سوابق خرید' />
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
                                d="M3.08674 16.3147L3.85564 10.1201C4.32405 7.90964 5.64973 7 6.91355 7H17.0683C18.3498 7 19.7197 7.84597 20.1174 10.1201L20.8951 16.3147C21.5314 20.8629 19.1894 22 16.1315 22H7.84153C4.79245 22 2.52111 20.3535 3.08674 16.3147ZM14.903 12.1486C15.3911 12.1486 15.7868 11.7413 15.7868 11.2389C15.7868 10.7366 15.3911 10.3293 14.903 10.3293C14.4149 10.3293 14.0192 10.7366 14.0192 11.2389C14.0192 11.7413 14.4149 12.1486 14.903 12.1486ZM9.99797 11.2389C9.99797 11.7413 9.60229 12.1486 9.11418 12.1486C8.62608 12.1486 8.23039 11.7413 8.23039 11.2389C8.23039 10.7366 8.62608 10.3293 9.11418 10.3293C9.60229 10.3293 9.99797 10.7366 9.99797 11.2389Z"
                                fill="var(--mainOrange)"
                                fillRule="evenodd"
                            ></path>
                            <path
                                d="M7.02613 6.77432C7.02299 6.85189 7.0379 6.92913 7.06968 7H8.50679C8.53462 6.92794 8.54937 6.85153 8.55034 6.77432C8.55034 4.85682 10.1101 3.30238 12.0343 3.30238C13.9584 3.30238 15.5182 4.85682 15.5182 6.77432C15.505 6.84898 15.505 6.92535 15.5182 7H16.9901C17.0033 6.92535 17.0033 6.84898 16.9901 6.77432C16.8783 4.10591 14.675 2 11.9951 2C9.31511 2 7.11183 4.10591 7 6.77432H7.02613Z"
                                fill="var(--mainOrange)"
                                opacity="0.4"
                            ></path>
                        </svg>
                        <span className="special">سوابق خرید</span>
                    </div>
                </div>
            </Layout>
        </div>

    );
}

export default PurchasesPage;