import React,{useState} from 'react'

function Rules({AfficheRules}) {

  return (
    <div className='absolute md:bottom-20 bottom-5 w-full  flex items-center justify-end max-md:justify-center'>
    <button className='text-white border-2 border-slate-400 rounded-lg w-36 text-xl   py-2  self-end   md:mr-20' onClick={()=>AfficheRules()}>
        RULES
    </button>
    </div>


  )
}

export default Rules