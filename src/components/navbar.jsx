import React from "react"

import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div className="nav px-6 py-9 flex justify-between items-center bg-[#FFF7ED]">
            <div className="site_name">
                <Link to="/" className="uppercase text-black text-2xl font-bold">#VANLIFE</Link>
            </div>
            <div className="nav_left flex gap-3 text-base font-semibold text-[#4D4D4D]">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </div>
    )
}

export default NavBar
