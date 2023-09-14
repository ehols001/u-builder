import { user_details } from '@/lib/app-details'

const Display = () => {
    return (
        <div className="text-center">
            <p className='text-lg/6 md:text-xl/6 lg:text-5xl font-bold tracking-wide'>{user_details.name}</p>
            <ul className='text-xs/5 md:text-sm/5 lg:text-xl truncate'>
                {user_details.titles.map((title) => (
                    <li>{title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Display;