import React from 'react'

function Choices({id,source,colorBg,Picked,CRef}) {
  return (
    <div className={`outside-circle w-52 h-52 max-md:w-32 max-md:h-32 max-xl cursor-pointer ${colorBg}`} id={id} onClick={()=>Picked(CRef)} ref={CRef}>
        <div className='inside-circle w-40 h-40 max-md:w-24 max-md:h-24 bg-white '>
            <img src={source} alt="Paper"  />
        </div>
    </div>
  )
}

export default Choices