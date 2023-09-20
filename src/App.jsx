import { useState } from 'react'
import Score from './components/Score'
import Game from './components/Game'
import Rules from './components/Rules'
import IRules from './assets/image-rules.svg'
function App() {
  const [rules,SetRules]=useState(null)
  const AfficheRules=()=>{
  const exitRules=()=>{
    SetRules(null)
  }
    var content=(
      <div className='w-full h-full  absolute bg-ColorFocus flex justify-center  '>
        <div className='w-1/3 h-min bg-white mt-48 p-10 rounded-xl flex flex-col items-center'>
          <div className='flex w-full justify-between'>
            <h3 className='text-3xl font-bold text-ColorRules'>RULES</h3> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#D0D1D6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer" onClick={()=>exitRules()}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" fill="#D0D1D6"/>
            </svg>
          </div>

            <img src={IRules} alt="IRules"  width={400} className='mt-4'/>
        </div>
      </div>

    )
    SetRules(content)
  }

  return (
     
    <div className='App flex flex-col items-center  h-screen'>
     <Score/>
     <Game/>
     <Rules AfficheRules={AfficheRules}/> 
     {rules}
    </div>

    
  )
}

export default App
