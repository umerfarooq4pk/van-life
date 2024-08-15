import React from "react"
import { useParams } from "react-router-dom"
const VanDetail = () => {
    const params = useParams()
    const [van, setVan] = React.useState(null)
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    return (
        <div className="van_detail_container p-7 bg-[#FFF7ED]">
            {van ? (
                    <div className="p-6 bg-white">
                        <div className="grid grid-cols-2 items-center gap-5">
                            <img className="rounded" alt={van.name} src={van.imageUrl} />
                            <div>
                                <p className="mb-4">
                                    <span className="bg-[#E17654] py-2 px-5 rounded text-sm text-white font-semibold">{van.type}</span>
                                </p>
                                <h1 className="font-bold text-2xl text-[#161616]">{van.name}</h1>
                                <p><span className="text-[#161616] text-xl font-bold">${van.price}</span><span className="text-[#161616] text-base font-medium">/day</span></p>
                            </div>
                        </div>
                        <div className="text-[#161616] mt-6 mb-4">
                            <p className="text-base mb-4"><strong>Name: </strong>{van.name}</p>
                            <p className="text-base mb-4"><strong>Category: </strong>{van.type}</p>
                            <p className="text-base"><strong>Description: </strong>{van.description}</p>
                        </div>
                        <button className="text-white text-base bg-[#FF8C38] p-3 w-full rounded">Rent this van</button>
                    </div>
                ): <h2>Loading...</h2>
            }
        </div>
    )
}
export default VanDetail