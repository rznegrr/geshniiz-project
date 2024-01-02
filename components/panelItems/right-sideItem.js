import Link from "next/link";

const RightSideItem = (props) => {
    return (
        <div className="flex py-3 md:mr-6 mt-2 items-center cursor-pointer">
            {props.children}
            <li className="hidden md:block">
                <Link href={`/panel/${props.link}`}>{props.desc}</Link>
            </li>
        </div>
    );
}

export default RightSideItem;