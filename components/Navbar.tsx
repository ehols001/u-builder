import Link from "next/link";
import { navbarLinks } from "@/constants";

const Navbar = () => {
    return (
        <div className="basis-1/6 bg-gradient-to-b from-indigo-900 to-indigo-950 p-2 lg:p-4 m-4 lg:m-8 mt-2 lg:mt-4 mr-2 lg:mr-4 rounded-lg text-xs md:text-base lg:text-lg overflow-hidden hover:overflow-y-auto">
            <div className="flex flex-col divide-y">
                {navbarLinks.map((link, index) => (
                    <Link href={`/${link.id}`} key={index} className="py-2 truncate">
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar;