import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanPhotos = () => {
    const van = useOutletContext()
    return (
        <div className="mt-6 mb-4">
            <img className="rounded" alt={van.name} src={van.imageUrl} />
        </div>
    )
}
export default HostVanPhotos