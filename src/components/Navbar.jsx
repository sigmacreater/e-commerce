import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [navOpen,setNavOpen] = useState(false)
    const toggle = ()=>{
        setNavOpen(!navOpen)
    }
    
    const li =[
        {
            label : "Home",
            link : "/"
        },
        {
            label : "About",
            link : "/about"
        },
        {
            label : "Blogs",
            link : "/blogs"
        },
        {
            label : "Admin",
            link : "/admin"
        },
        {
            label : "Contact",
            link : "/contact"
        },
    ]
    return (
        <>
            <div className='flex justify-between items-center px-6 py-3 bg-blue-900'>
                <h1 className='text-3xl font-bold text-white '>World Store</h1>
                <div className='md:flex items-center justify-between gap-4 text-white hidden '>
                {
                    li.map((v,i)=>(
                    <Link key={i} className='' href={v.link}>{v.label}</Link>

                    ))
                }
                </div>
                <div>
                <button className={`border  hidden md:block py-2 w-30 bg-blue-500 hover:bg-blue-900 font-bold text-white rounded-tl-[10px] hover:rounded-tr-[10px] hover:rounded-bl-[10px] rounded-br-[10px] hover:rounded-none transition-all duration-500`}>Login</button>
                </div>
                <button onClick={toggle} className=' md:hidden  text-white '>{!navOpen?<Menu/>:<X/>}</button>
            </div>
            <div className={`bg-white overflow-hidden border-r-2 border-blue-500 fixed top-0 h-screen transition-all duration-500   ${navOpen ?"w-56":"w-0 border-none"}`}>
            <h1 className={`text-3xl font-bold text-blue-500 mt-3 ml-3 ${navOpen? "block":"hidden"} `}>World Store</h1>
            <div className={`flex flex-col p-5 gap-7 ${navOpen ?"block":"hidden"}`}>
                {li.map((v,i)=>(
                    <Link className='border border-blue-500 flex justify-center items-center py-2 font-bold rounded-lg text-blue-500' key={i} href={v.link}>{ navOpen && v.label}</Link>
                ))}
            </div>
            <button className={` ${navOpen?" opacity-100 duration-1000":" opacity-0 duration-500"}  fixed bottom-2 left-10 py-2 w-30 bg-blue-500 font-bold text-white rounded-tl-[10px] hover:rounded-tr-[10px] hover:rounded-bl-[10px] rounded-br-[10px]  hover:rounded-none transition-all `}>Login</button>
            </div>
        </>
    )
}
 
export default Navbar
