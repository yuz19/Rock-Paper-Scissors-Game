import React from 'react'

function Score() {
  return (
    <div className='flex justify-between w-1/3 border-4 border-slate-400 rounded-lg text-2xl text-white font-bold p-4'>
        <div>
            <p>ROCK</p>
            <p>PAPPER</p>
            <p>SCISSORS</p>
        </div>

        <div className='bg-white w-1/4 rounded-lg flex flex-col  justify-center items-center'>
        <h3 className='text-blue-700 text-lg font-medium '>score</h3>
         {/* SCORE */}
         <h3 className='text-zinc-500 text-5xl'>12</h3>
        </div>
     
    </div>
  )
}

export default Score