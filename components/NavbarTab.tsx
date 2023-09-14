import Link from "next/link";

export type TabItem = {
    name: string;
    slug: string;
};

export const NavbarTab = ({ link, from }: { link: TabItem; from: string }) => {
    return (
        <>
            <Link
                href={`/${link.slug}`}
                className={`flex-1 flex justify-center items-center text-xs md:text-sm lg:text-md ${from === 'left' ? 'first:rounded-bl-3xl' : 'last:rounded-br-3xl'} hover:bg-gradient-to-b from-transparent via-slate-100/10 to-transparent border-2 border-t-transparent border-b-amber-300/20 border-amber-300/50 first:border-r-transparent ${from === 'left' ? 'last:border-r-transparent' : 'first:border-l-transparent'}`}
            >
                {link.name}
            </Link>
        </>
    )
};