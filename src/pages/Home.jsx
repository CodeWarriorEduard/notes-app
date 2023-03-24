import React from "react";
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import NavBar from '../components/NavBar'
import Description from '../components/Description'


export default function Home(){
    return(
    <div>
        <NavBar/>
        <Hero/>
        <Description/>
        <Pricing/>
     </div>
    )
}