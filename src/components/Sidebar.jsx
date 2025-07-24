import { Book, ChartBar, ChevronLeft, ChevronRight, LayoutDashboard, ListOrdered, Users } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
    const links = [
        {
            lable:"Dashboard",
            link:"/admin",
            icon:<LayoutDashboard/>
        },
        {
            lable:"Users",
            link:"/admin/users",
            icon:<Users/>
        },
        {
            lable:"Products",
            link:"/admin/product",
            icon:<Book/>
        },
        {
            lable:"Category",
            link:"/admin/category",
            icon:<ChartBar/>
        },
        {
            lable:"Orders",
            link:"/admin/orders",
            icon:<ListOrdered/>
        },

    ]

    const [side,setSide]=useState(true)
    const toggle = ()=>{
        setSide(!side)
    }
  return (
    <>
    <div className={`  bg-blue-500 relative transition-all duration-700 ${side ?"w-56":"w-20"}`}>
        <h1 className={`text-white font-bold  flex  justify-center mb-5  ${side ?"text-2xl":"text-lg mt-1"}`}>{ side ? "World ":"World"}</h1>
      <div  className='flex flex-col   gap-5 text-white p-3'>
        {links.map((v,i)=>(
            <Link href={v.link} key={i} className={`border border-white flex  rounded-lg p-2 gap-2 ${side ?" ":" pl-3 "}`}>
                <div>
                {v.icon}
                </div>
                <p className={` origin-left transition-all duration-300 ${side ?"opacity-100 scale-100":"opacity-0 scale-0 "}`}>
                {v.lable}
                </p>
            </Link>
        ))}
      </div>
      <button onClick={toggle} className='border border-white text-white absolute bottom-2 right-0 p-1'>{side ? <ChevronLeft/> :<ChevronRight/>}</button>
    </div>
    </>
  )
}

export default Sidebar
