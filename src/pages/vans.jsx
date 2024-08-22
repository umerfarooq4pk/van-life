import React from "react"
import { Link } from "react-router-dom"

const Vans = () => {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    console.log("vans ======>", vans)

    const vansHTML = vans.map(item => (
            <Link key={item.id} to={`/van/${item.id}`} className="single_van">    
                <img className=" max-w-full rounded" alt={item.name} src={item.imageUrl} />
                <div className="detail flex justify-between mt-3 mb-1">
                    <p className="font-semibold text-xl text-[#161616]">{item.name}</p>
                    <div>
                        <p className="font-semibold text-xl text-[#161616]">${item.price}</p>
                        <p className="text-base text-[#161616]">/day</p>
                    </div>
                </div>
                <span className=" bg-[#E17654] px-4 pt-1 pb-[7px] text-base font-semibold text-center text-white rounded">{item.type}</span>
            </Link>
        ))
    
    return (
        <div className="mt-14 px-6 mb-10">
            <h1 className=" text-3xl font-bold text-[#161616] mb-4">Explore our van options</h1>
            
            <div className="van_container grid gap-8 grid-cols-2">
                {vansHTML}
            </div>
            
        </div>
    )
}

export default Vans