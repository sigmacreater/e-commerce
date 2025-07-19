import React from "react"


const Contact = () => {


  return (
    <>
  
      <div className="min-h-screen flex items-center justify-center  p-4">
        <form
          
          className="bg-white border border-gray-200 rounded-3xl shadow-2xl w-full max-w-lg p-8 sm:p-10 flex flex-col gap-6 "
        >
          <h2 className="text-3xl  text-blue-600 font-bold text-center text--600">
            Contact Us
          </h2>

          <input
            placeholder='Your Name'
            className='w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            type="text"
            name='name'
          
            required
          />

          <input
            placeholder='Your Email'
            className='w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            type="email"
            name='email'
         
            required
          />

          <textarea
            placeholder='Your Message'
            className='w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            name="message"
            rows={4}
           
            required
          ></textarea>

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition'
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
