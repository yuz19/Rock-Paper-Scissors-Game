import React,{useRef} from 'react'
import Paper from '../assets/icon-paper.svg'
import Scissors from '../assets/icon-scissors.svg'
import Rock from '../assets/icon-rock.svg'
import Choices from './Choices'
import Triangle from '../assets/bg-Triangle.svg'
function Game() {
  const paperRef = useRef(null);
  const scissorsRef = useRef(null);
  const rockRef = useRef(null);
  const Picked=(cRef)=>{
    const Triangle=document.querySelector('.bg-triangle').style.display = 'none';
    console.log(cRef.current.id)
  }
  return (
    <div className='container flex w-1/3 h-2/4 flex-wrap justify-center items-center mt-24 relative '>
            <div className='bg-triangle absolute'>
              <img src={Triangle} alt="Triangle" />
            </div>
            <div  className='w-1/2 flex justify-center items-center hand relative'>
                <Choices id='Paper'   source={Paper} colorBg={"bg-ColorHand"}  Picked={Picked} CRef={paperRef}/>
            </div>

            <div  className='w-1/2 flex justify-center items-center'>
                <Choices id='Scissors'  source={Scissors} colorBg={"bg-ColorScissor"} Picked={Picked}  CRef={scissorsRef}/>
            </div>

            <div className=''>
                <Choices id='Rock' source={Rock} colorBg={"bg-ColorRock"} Picked={Picked}  CRef={rockRef}/>
            </div>

    </div>

  )
}

export default Game