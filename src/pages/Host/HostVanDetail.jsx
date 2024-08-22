import React from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import backArrow from '../../assets/back-arrow.png'
const HostVanDetail = () => {
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
                <>
                    <div className="flex px-6">
                        <Link to='..' relative="path" className="flex gap-2 text-base text-[#201F1D] items-center mb-9">
                            <img className="w-3 h-3" alt="Back Arrow" src={backArrow} />
                            Back to all vans
                        </Link>
                    </div>
                    <div className="p-6 bg-[#fff]">
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
                        <div className="flex gap-5 text-[#4D4D4D] text-base mt-6">
                            <NavLink
                                to='.'
                                end
                                className={({isActive}) => isActive ? 'text-[#161616] font-semibold underline': null}
                            >
                                Detail
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
                        <Outlet context={van} />
                        
                    </div>
                </>
                ): <h2>Loading...</h2>
            }
        </div>
    )
}
export default HostVanDetail