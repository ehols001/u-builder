import '@/styles/globals.css'
import Link from "next/link";
import Image from 'next/image';
import { navbar_left, navbar_right, user_details } from "@/lib/app-details";
import { NavbarTab } from "./NavbarTab";

const Navbar = () => {
    return (
        <div className="flex justify-evenly w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-4 bg-gradient-to-b from-transparent via-slate-300/40 to-transparent rounded-b-3xl ">
            <div className="navbar">
                {navbar_left.map((link, index) => (
                    <NavbarTab key={index} link={link} from='left' />
                ))}
            </div>
            <div className="flex justify-center border-2 border-b-amber-300/20 border-x-transparent border-t-transparent -mx-0.5">
                <Link href={'/'} className="-my-2">
                    <Image
                        src={user_details.picture}
                        width={100}
                        height={100}
                        alt="Profile Picture"
                        sizes="(min-width: 100px)"
                        className='min-w-full border-4 border-amber-300/50 rounded-full hover:bg-slate-100/30'
                    />
                </Link>
            </div>
            <div className="navbar">
                {navbar_right.map((link, index) => (
                    <NavbarTab key={index} link={link} from='right' />
                ))}
            </div>
        </div>
    )
}

export default Navbar;