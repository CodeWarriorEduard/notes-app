import React from "react";

export default function Description(){
    return(
        <div className="bg-zinc-900 h-full text-white">
            <div className="container mx-auto w-full h-full pt-10">
                <h2 className="text-6xl font-semibold mx-auto text-center" data-aos="fade-right" data-aos-duration="1000">Remember everything, organize everything</h2>
                <div className="flex w-full h-full mt-20 items-center">
                    <div className="w-[80%]">
                        <img src="./src/assets/images/imacweb.png" alt="pc" />
                    </div>
                    <ul className="text-2xl mx-40 flex flex-col gap-10">
                        <li data-aos="fade-right" data-aos-duration="600">
                            <b>ALL YOU HAVE TO DO IN ONE PLACE</b>
                            <p>With Insta-Notes you'll have access to all the things you have to do in one place.</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800">
                            <b>SYNC YOUR NOTES</b>
                            <p>Insta-Notes allows you to sync all your notes in every device you use.</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000">
                            <b>BE PRODUCTIVE</b>
                            <p>Remember everything, organize everything.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
