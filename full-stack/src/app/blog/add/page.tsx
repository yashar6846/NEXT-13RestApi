"use client"

import { Fragment, useRef } from "react"
import { Toaster } from "react-hot-toast"
import { log } from "util"

export default function AddBlog() {
    const titleRef = useRef<HTMLInputElement | null>(null)
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(titleRef.current?.value);
        console.log(descriptionRef.current?.value);  
        
    }
  return (
   <Fragment>
   <Toaster/>
   <div className="w-full m-auto flex my-4">
    <div className="flex flex-col justify-center items-center m-auto">
        <p className="text-2xl text-slate-200 font-bold p-3">
            Add A Wonderful
        </p>

        <form onSubmit={handleSubmit}>
            <input ref={titleRef} placeholder="Enter Title" type="text" className="rounded-md px-4 w-full py-2 my-2" />

            <textarea 
            ref={descriptionRef}
             placeholder="Enter Description"
            className="rounded-md px-4 py-2 w-full my-2" />
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200">Submit</button>
        </form>
    </div>
   </div>
   </Fragment>
  )
}
