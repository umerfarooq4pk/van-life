import React from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const vansHTML = vans.map(item => (
        <Link key={item.id} to={`/host/vans/${item.id}`}>
            <div className="bg-white px-6 py-4 rounded-md flex gap-4 items-center mb-4">
                <img 
                    className="max-w-[50px] rounded-md"
                    alt={item.name} 
                    src={item.imageUrl} />
                <div className="detail">
                    <h2 className="text-chinese-black text-xl font-semibold">{item.name}</h2>
                    <p className="text-[#4D4D4D] text-base">${item.price}/day</p>
                </div>
            </div>
        </Link>
    ))
    return (
        <div className="px-6 bg-sea-shel pb-4">
            <h1 className="text-chinese-black text-3xl font-bold pb-8">Your listed vans</h1>
            {vansHTML}
        </div>
    )
}
export default HostVans