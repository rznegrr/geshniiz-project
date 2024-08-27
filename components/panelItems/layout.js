import RightSide from "./right-side";
import PanelExit from "../icons/panel-exit";

const Layout = (props) => {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen mycustom">
        <RightSide />
        <PanelExit/>
        <div className="col-span-11 md:col-span-9 xl:col-span-10 2xl: left-box">
          <div className="w-full text-center h-[89%] mt-16 overflow-hidden">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;