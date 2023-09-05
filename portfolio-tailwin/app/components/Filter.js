
import Image from 'next/image'
import React from 'react'

export default function Filter() {
  return (
    <div className=' h-screen parent'>
        <div className=' inline-block p-6 text-black bg-white border rounded-lg shadow-md brightness-50 hover:brightness-100'>

        <image className='w-64 mb-3 ' src={"https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_1280.jpg"} width={60} height={60}/>

        <h1 className='text-2xl'>Hello</h1>
        <p className='mb-4'>This is my div</p>
        <button className='px-3 py-2 text-white rounded-lg shadow cursor-pointer bg-cyan-500 shadow-cyan-500/50'>say hello</button>
        </div>
    </div>
  )
}
