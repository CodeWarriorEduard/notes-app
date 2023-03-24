import React, { useEffect } from 'react'

function Hero() {
  return (
    <div className="bg-[url('./src/assets/images/parker-byrd-gxD8hCmi0IQ-unsplash.jpg')] h-screen text-white bg-cover">
        <div className='container mx-auto w-full h-full'>
            <div className='h-5/6 flex items-center justify-between rounded-lg'>
                <div className='max-w-lg'>
                    <h2 className='text-6xl font-extrabold'>Take easy notes with Insta-Notes</h2>
                    <p className='text-lg mb-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quam velit? Commodi numquam rem, possimus molestias error sunt impedit maiores aliquid unde adipisci libero a ipsum necessitatibus, ut nisi omnis, repudiandae perspiciatis quasi dolorum repellendus hic? Quisquam ipsam natus tenetur.</p>
                    <button className='bg-[#3F4E4F] w-40 h-14 rounded-md text-lg mt-4 text-white'>Join Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
