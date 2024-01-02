import Header from "./header";
import Navigation from "./navigation";
import Shop from '../product/Shop';
import PhoneMenu from "../ui/phone-menu.js";

export default function({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div className="grid grid-cols-12 container mx-auto">
          <div className="md:col-span-8 lg:col-span-9 col-span-12 grid grid-cols-12">
            <div
              className="col-span-12 py-4 flex border-b border-solid border-gray-300 dis-none"
            >
              <div className="pr-10">
                <span className="special ml-5 cursor-pointer">منو</span>
                <span className="cursor-pointer">درباره ما</span>
              </div>
            </div>
            <Navigation />
            <div className="col-span-12 grid grid-cols-12 pro-bg box-border lg:pr-10 overflow-auto">
              {children}
            </div>
          </div>
          <Shop mainDiv="dis-none md:col-span-4 lg:col-span-3 2xl:col-span-3 text-center md:border md:border-solid md:border-gray-300 md:border-t-0 md:border-b-0 relative"
          totalAmountDiv="py-4 border-t border-solid border-gray-300"/>
        </div>
        <PhoneMenu />
      </div>
    </div>
  )
}
