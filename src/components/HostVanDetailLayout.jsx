import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostVanDetailLayout = () => {
    return (
        <>
            <Outlet />
            <div className="px-6 text-[#4D4D4D] text-lg">
                <div className="flex gap-6">
                    <NavLink
                        to='.'
                        end
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to='pricing' 
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='photos' 
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Photos
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default HostVanDetailLayout