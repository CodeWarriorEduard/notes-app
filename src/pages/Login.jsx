import React from "react";
import NavBar from "../components/NavBar";
export default function Login(){
    return(
        <div className="bg-zinc-900 min-h-screen text-white flex items-center justify-center">
            <div className="max-w-4xl bg-[#2C3639] flex rounded-2xl p-4">
                <div className="flex flex-col w-1/2 justify-center px-10">
                    <h2 className="text-4xl font-bold">Login</h2>
                    <form action="post" className="flex flex-col mt-10">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="email" id="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
                        <label htmlFor="passw" className="mb-2">Password</label>
                        <input type="password" id="passw" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
                        <button type="submit" className="bg-[#3F4E4F] h-12 rounded-lg">Log In</button>
                    </form>
                    <p className="mt-10"><b><a href="#">Forgot your password?</a></b></p>
                    <div className="grid grid-cols-3 items-center mt-4">
                        <hr className="border-gray-600 mt-4"/>
                        <p className="text-center">OR</p>
                        <hr className="border-gray-600 mt-4"/>
                    </div>
                    <button className="bg-[#3F4E4F] rounded-lg h-10 mt-4">Sign In</button>
                </div>
                <div className="w-1/2">
                    <img src="./src/assets/images/justin-morgan-Hx-4TbpsoIw-unsplash.jpg" alt="login-img" className="rounded-xl"/>
                </div>
            </div>
        </div>
    )
}