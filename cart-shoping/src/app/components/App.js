"use client"

import Header from './Header'
import CretSidebar from './CretSidebar'


export default function App({Children}) {
  return (
    <div>
        <div className='mr-32'>
            <Header />
            <main className='p-4'>{Children}</main>
        </div>
        < CretSidebar />
    </div>
  )
}
