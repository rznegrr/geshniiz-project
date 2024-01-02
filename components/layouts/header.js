import Link from "next/link";
import SearchBox from "../icons/search-box";
import SiteLogo from "../../public/site-logo";
import Phone from "../icons/phone";
import Login from "../icons/login";

const Header = () => {
    return (
        <header>
            <div className="border-b border-solid border-gray-300">
                <div className="grid grid-cols-12 mx-auto pt-4 pb-2 container">
                    <div className="col-span-4 flex dis-none">
                        <Link href="/panel">
                            <Login />
                        </Link>
                        <Phone />
                    </div>
                    <SiteLogo />
                    <SearchBox />
                </div>
            </div>
        </header>
    );
}

export default Header;