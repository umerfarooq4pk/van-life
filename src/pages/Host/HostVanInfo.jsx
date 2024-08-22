import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
    const van = useOutletContext();
    return (
        <>
            <div className="text-[#161616] mt-6 mb-4">
                <p className="text-base mb-4"><strong>Name: </strong>{van.name}</p>
                <p className="text-base mb-4"><strong>Category: </strong>{van.type}</p>
                <p className="text-base"><strong>Description: </strong>{van.description}</p>
            </div>
            <button className="text-white text-base bg-[#FF8C38] p-3 w-full rounded">Rent this van</button>
        </>
    )
}
export default HostVanInfo