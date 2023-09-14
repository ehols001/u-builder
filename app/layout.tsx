import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'YouBuilder',
    description: 'Generate Your Own Web Portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className='bg-gradient-radial flex justify-center items-center'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
