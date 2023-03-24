import React, { useEffect } from "react";
import PriceCard from "./PriceCard";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Pricing(){
    useEffect(()=>{
        Aos.init();
    })
    return(
        <div className="bg-zinc-900 h-screen text-white">
            <div className="container mx-auto h-full p-10 flex flex-col justify-center">
                <h2 className="text-center text-5xl font-semibold">Our Pricing</h2>
                <p className="text-center text-2xl"data-aos = "slide-up">Choose the perfect plan for your needs</p>
                <div className="flex gap-4 justify-around items-center p-20">
                    <PriceCard
                    data = "slide-up" 
                    duration="2000"
                    color="#A27B5C"
                    name="Free"
                    description="Use our service for free"
                    btnT="Start Free Plan"
                    features={["1GB Storage", "100 Notes"]}
                    price="Free"
                    />
                     <PriceCard
                    data = "slide-up" 
                    duration="2400"
                    color="#3F4E4F"
                    name="Basic"
                    description="Use our service for free"
                    btnT="Start Basic Plan"
                    features={["10GB Storage", "Unlimited notes", "Device Sync"]}
                    price="$5"
                    />
                     <PriceCard
                    data = "slide-up" 
                    duration="2800"
                    color="#2C3639"
                    name="Unlimited"
                    description="Pay once, use forever."
                    btnT="Start Unlimited"
                    features={["100GB Storage", "Unlimited notes", "Device Sync"]}
                    price="$299"
                    />
                </div>
               
            </div> 
        </div>
    )
}