"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
    const [cat,setCat] = useState("")
    const router = useRouter()

    const handleChange = (e)=>{
        setCat(e.target.value)

    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            
            const res = await axios.post("/api/category" ,{ title: cat })
            if(res.data.success){
                toast.success("Category added successfully");
                router.push("/admin/category")
            }
        } catch (error) {
            toast.error("Failed to add category");
            console.error("Error submitting category:", error);
        }finally{
            setCat("")
        }


    }
  return (
    <>
    <Toaster/>
      <form >
        <div className="flex flex-col gap-4 px-32">
          <label className="text-lg font-semibold">Category Name</label>
          <input
            type="text"
            value={cat}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter category name"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add Category
          </button>
        </div>
      </form>
    </>
  )
}

export default page
