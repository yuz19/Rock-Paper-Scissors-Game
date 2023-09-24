import { useEffect, useState } from 'react'
import Score from './components/Score'
import Game from './components/Game'
import Rules from './components/Rules'
import IRules from './assets/image-rules.svg'
function App() {
  const [rules,SetRules]=useState(null)
  const [score,SetScore]=useState(parseInt(localStorage.getItem("score"))||0)

 
  const exitRules=()=>{
    SetRules(null)
  }
  const AfficheRules=()=>{

    var content=(
      <div className='w-full  h-full absolute bg-ColorFocus flex justify-center '>
        <div className='card w-1/3 max-md:w-full max-md:h-full  h-min bg-white md:mt-48 p-10 rounded-xl flex flex-col items-center max-md:pt-28'>
          <div className='flex max-md:flex-col max-md:h-3/4 max-md:absolute w-full items-center justify-between'>
            <h3 className='text-3xl font-bold text-ColorRules '>RULES</h3> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#D0D1D6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer " onClick={()=>exitRules()}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" fill="#D0D1D6"/>
            </svg>
          </div>

            <img src={IRules} alt="IRules"  width={400} className='mt-4 max-md:mt-28'/>
        </div>
      </div>

    )
    SetRules(content)
  }

  return (
     
    <div className='App flex flex-col items-center  h-screen'>
     <Score score={score} />
     <Game SetScore={SetScore} score={score}/>
     <Rules AfficheRules={AfficheRules}/> 
     {rules}
    </div>

    
  )
}

export default App
