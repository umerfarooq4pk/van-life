import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <>
            <div className="px-6 pb-11 bg-[#FFF7ED] text-[#4D4D4D] text-lg">
                <div className="flex gap-6">
                    <NavLink
                        to='.'
                        end
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to='income' 
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Income
                    </NavLink>
                    <NavLink
                        to='vans' 
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Vans
                    </NavLink>
                    <NavLink 
                        to='reviews' 
                        className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                    >
                        Reviews
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default HostLayout