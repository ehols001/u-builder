import SelectionPane from '@/components/SelectionPane'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <main className='w-full h-screen p-8'>
            <div className='flex flex-col w-full h-full min-h-[300px] bg-slate-800 rounded-xl border-2 border-slate-500'>
                <Header />
                <div className='flex flex-row h-4/5 overflow-hidden'>
                    <Navbar />
                    <SelectionPane />
                </div>
            </div>
        </main>
    )
}
