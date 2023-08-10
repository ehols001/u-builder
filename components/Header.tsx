import Image from 'next/image';
import { userInfo } from '@/constants'

const Header = () => {
    return (
        <div className="flex items-center h-1/5 bg-gradient-to-r from-indigo-900 m-4 lg:m-8 mb-2 lg:mb-4 rounded-t-lg">
            <div className='flex w-2/3 h-full p-2 lg:p-4'>
                <Image
                    src={userInfo.picture}
                    alt="Profile Picture"
                    className='w-auto h-full rounded-full'
                />
                <div className='flex flex-col w-auto h-full justify-evenly ml-2 lg:ml-4 overflow-hidden'>
                    <p className='text-lg/6 md:text-xl/6 lg:text-5xl font-bold tracking-wide'>{userInfo.name}</p>
                    <p className='text-xs/5 md:text-sm/5 lg:text-xl truncate'>
                        {userInfo.titles.map((title) => (
                            title.title
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;