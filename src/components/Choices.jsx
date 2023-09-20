import React from 'react'

function Choices({id,source,colorBg,Picked,CRef}) {
  return (
    <div className={`outside-circle cursor-pointer ${colorBg}`} id={id} onClick={()=>Picked(CRef)} ref={CRef}>
        <div className='inside-circle bg-white '>
            <img src={source} alt="Paper" />
        </div>
    </div>
  )
}

export default Choices