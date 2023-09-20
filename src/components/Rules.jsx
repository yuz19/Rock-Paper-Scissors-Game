import React,{useState} from 'react'

function Rules({AfficheRules}) {

  return (
    <button className='text-white border-2 border-slate-400 rounded-lg w-36 text-xl   py-2  self-end absolute bottom-0 mb-14 mr-14' onClick={()=>AfficheRules()}>
        RULES
    </button>

  )
}

export default Rules