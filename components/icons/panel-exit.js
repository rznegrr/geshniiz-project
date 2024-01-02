import Link from "next/link";

const PanelExit = () => {
    return (
        <div className="box-exit cursor-pointer">
            <Link href={"/"}>
                <svg
                    fill="none"
                    height="55"
                    viewBox="0 0 48 55"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0H48V47C48 51.4183 44.4183 55 40 55H8C3.58172 55 0 51.4183 0 47V0Z"
                        fill="var(--mainOrange)"
                        fillOpacity="0.51"
                    ></path>
                    <path
                        d="M17.7334 22.7334L31.2667 36.2667M17.7334 36.2667L31.2667 22.7334"
                        stroke="var(--mainOrange)"
                        strokeWidth="4"
                    ></path>
                </svg>
            </Link>
        </div>
    );
}

export default PanelExit;