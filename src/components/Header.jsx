import React from "react"

import { Link, NavLink } from "react-router-dom"
const Header = () => {
    return (
        <div className="nav px-6 py-9 flex justify-between items-center bg-[#FFF7ED]">
            <div className="site_name">
                <Link to="/" className="uppercase text-black text-2xl font-bold">#VANLIFE</Link>
            </div>
            <div className="nav_left flex gap-3 text-base font-semibold text-[#4D4D4D]">
                <NavLink
                    to="/host"
                    className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                >
                    Vans
                </NavLink>
            </div>
        </div>
    )
}

export default Header
