import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentRoute = usePathname();

  return (
    <nav
      className="col-span-12 py-4 flex border-b border-solid border-gray-300 handy-nav"
    >
      <ul className="flex" >
        <li className="pr-10">
          <Link className={`ml-6 ${currentRoute === "/" ? 'active' : ''}`} href="/">همه</Link>
        </li>
        <li>
          <Link className={`ml-6 ${currentRoute === "/Burger" ? 'active' : ''}`} href="/Burger">برگر مخصوص</Link>
        </li>
        <li>
          <Link className={`ml-6 ${currentRoute === "/Barbecue" ? 'active' : ''}`} href="/Barbecue">کباب</Link>
        </li>
        <li>
          <Link className={`ml-6 ${currentRoute === "/Appetizer" ? 'active' : ''}`} href="/Appetizer">پیش غذا</Link>
        </li>
        <li>
          <Link className={`ml-6 ${currentRoute === "/Dessert" ? 'active' : ''}`} href="/Dessert">دسر</Link>
        </li>
        <li>
          <Link className={`ml-6 ${currentRoute === "/Beverages" ? 'active' : ''}`} href="/Beverages">نوشیدنی</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;