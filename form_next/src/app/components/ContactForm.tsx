"use client"

import { useState } from "react"

export default function ContactForm() {
    const [fullname, setFullname] =useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(fullname);
        console.log( email);
        console.log( message);
        
    }

  return (
   <>
   <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
    <div>
        <label htmlFor="fullname">Full Name</label>
        <input onChange={(e)=> setFullname(e.target.value)}
        value={fullname}
         type="text" id="fullname" placeholder="john doe" />
    </div>

    <div>
        <label htmlFor="email">Email</label>
        <input onChange={(e)=> setEmail(e.target.value)}
        value={email} type="text" id="email" placeholder="yashar@gmail.com" />
    </div>

    <div>
        <label htmlFor="message">Your Message</label>
        <textarea onChange={(e)=> setMessage(e.target.value)}
        value={message} className="h-32" id="message" placeholder="Type your message here"></textarea>
    </div>
    <button className="bg-green-700 p-3 text-white font-bold" type="submit">Send</button>
   </form>
   <div className="bg-slate-100 flex-col">
   <div className="text-red-600 px-5 py-2">Error Message</div>
   </div>
   </>
  )
}
