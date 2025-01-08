import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 text-white justify-between flex px-5'>
            <div className="logo font-bold text-lg flex items-center">
                <Link href="/">Short_URL</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>About</li></Link>
                {/* <Link href="/"><li>Shorten</li></Link> */}
                <Link href="/"><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href='/shorten'><button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold hover:underline'>Try now</button></Link>
                    <Link href='/github' target='_blank'><button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold hover:underline'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
