"use client"
import axios from 'axios'
import { set } from 'mongoose'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
  
  const [loading, setLoading] = useState(false)
  const fetchCategory = async () => {
    try {
      setLoading(true)
      const res =  await axios.get("/api/category") 
      if(res.data.success) {
        setCat(res.data.Category)
      }
    } catch (error) {
      toast.error("Failed to fetch categories")
    } finally{
      setLoading(false)
    }
    }
  const [cat,setCat]= useState([])
  useEffect(() => {
    fetchCategory()
  },[])

 
    
  return (
    <>
      <Toaster/>

      <div >
        <h1 className='  text-3xl text-center'>Category</h1>

   <div  className=' flex justify-end  '>
   
<Link
href={"/admin/category/form"}
  title="Add New"
  class="group cursor-pointer outline-none hover:rotate-90 duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    class="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke-width="1.5"
    ></path>
    <path d="M8 12H16" stroke-width="1.5"></path>
    <path d="M12 16V8" stroke-width="1.5"></path>
  </svg>
</Link>
   </div>

        {loading ? <div className='text-center'>Loading...</div> :
        <div className=' p-4 rounded mt-4 grid grid-cols-3'>
          {cat.map((v,i)=>(
            <div key={i } className=' capitalize p-2 rounded-lg bg-blue-500 text-white'>{v.title}</div>
          ))}
        </div>
        }
      </div>
    </>
  )
}

export default page
