import React from "react"
export default function PriceCard(props){
    return(
        <div className="flex w-[320px] h-[400px] p-8 rounded-2xl flex-col" style={{backgroundColor: props.color}} data-aos = {props.data} data-aos-duration={props.duration}>
            <h2 className="mt-5 text-xl font-medium">{props.name}</h2>
            <h2 className="text-6xl font-black mt-4">{props.price}</h2>
            <ul className="flex gap-4 flex-col mt-4">
                {props.features.map(feature =>(
                    <li className="flex items-center">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="bg-neutral-900 text-white rounded-lg w-full h-20 mt-4">{props.btnT}</button>
        </div>
    )
}