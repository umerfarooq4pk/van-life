import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanPricing = () => {
    const van = useOutletContext()
    return (
        <>
            <p className=" mt-6 mb-4"><span className="text-[#161616] text-xl font-bold">${van.price}</span><span className="text-[#161616] text-base font-medium">/day</span></p>
        </>
    )
}
export default HostVanPricing