import React from "react";
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <header className='bg-zinc-900 pt-10 pb-10 text-white'>
            <div className="container mx-auto w-full h-full flex items-center justify-between">
                <h1 className='text-4xl font-serif'>Insta-Notes</h1>
                <div className='flex items-center gap-10'>
                    <ul className='flex gap-10 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pricing</li>
                    </ul>
                    <Link to="/login">
                        <button className='bg-[#3F4E4F] w-40 h-14 rounded-md text-lg mt-4' >Log In</button>
                    </Link>
                </div>    
            </div> 
        </header>
    )
}