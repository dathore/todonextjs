
import React from "react";
const Navbar = () => {
    return (

        <nav className="bg-green-400">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/home" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Simple Todo App</span>
                </a>
            <button className="bg-green-800 h-10 w-24 rounded-md hover:bg-green-600">LOGIN</button>
            </div>
        </nav>

    );
};
export default Navbar;
