import React from 'react'
import logo from '../assets/logo.svg'
function Score() {
  return (
    <div className='flex justify-between w-3/6   border-4 border-slate-400 mt-14 rounded-lg text-2xl text-white font-bold p-6'>
        <div>
        <img src={logo} alt="" />
        </div>

        <div className='bg-white w-1/4 rounded-lg flex flex-col  justify-center items-center'>
          <h3 className='text-blue-700 text-xl font-medium mb-1'>score</h3>
          {/* SCORE */}
          <h3 className='text-zinc-500 text-5xl'>12</h3>
        </div>
     
    </div>
  )
}

export default Score