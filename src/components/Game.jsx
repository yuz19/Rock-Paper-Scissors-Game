import React, { useEffect, useRef, useState } from 'react';
import Paper from '../assets/icon-paper.svg';
import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import Choices from './Choices';
import Triangle from '../assets/bg-Triangle.svg';

function Game() {
  const paperRef = useRef(null);
  const scissorsRef = useRef(null);
  const rockRef = useRef(null);
  const [picked, SetPicked] = useState(null);
  const [content, SetContent] = useState(null);
  const [showNewContent, setShowNewContent] = useState(false);

  // Function to change the content after a delay
  const changeContentWithDelay = () => {
    setTimeout(() => {
      setShowNewContent(true);
    }, 3000); // Change content after 3 seconds (adjust the delay as needed)
  };
  const Picked = (cRef) => {
    // document.querySelector('.container').style.display = 'none';

    SetPicked(cRef.current.id);
    changeContentWithDelay()
  };

  useEffect(() => {
    var temp = null;
    if (picked !== null) {
      let choice=null
      // console.log(picked)
      switch (picked) {
        case "paper":
          choice= ( <div className={`outside-circle w-72 h-72 cursor-pointer bg-ColorHand`}  onClick={()=>Picked(CRef)} ref={paperRef}>
              <div className='inside-circle w-52 h-52 bg-white '>
                  <img src={Paper} alt="Paper" className='w-24'/>
              </div>
            </div>)
          break;
        case "scissors":
          choice= ( <div className={`outside-circle w-72 h-72 cursor-pointer bg-ColorScissor`}  onClick={()=>Picked(CRef)} ref={paperRef}>
          <div className='inside-circle w-52 h-52 bg-white '>
              <img src={Scissors} alt="scissors" className='w-24'/>
          </div>
        </div>)
          break;
        case "rock":
          choice= ( <div className={`outside-circle w-72 h-72 cursor-pointer bg-ColorRock`}  onClick={()=>Picked(CRef)} ref={paperRef}>
          <div className='inside-circle w-52 h-52 bg-white '>
              <img src={Rock} alt="rock" className='w-24'/>
          </div>
        </div>)
          break;
          
        default:
          break;
      }
      temp=(
        <div className='flex flex-col  items-center'>
          <div className='flex w-full  items-center   mt-24 relative  ml-36'>
            <h3 className='text-white text-3xl w-1/2'>YOU PICKED</h3>
            <h3 className='text-white text-3xl  w-1/2'>THE HOUSE PICKED</h3>
          </div>
          <div className='flex z justify-start items-center gap-20  mt-24 relative'>
             {choice}
             {showNewContent ? (
          /* This content will be shown after the delay */
          <div className={`w-56 h-56 rounded-full bg-red-500`} />
        ) : (
          /* This content will be shown initially */
          <div className={`w-56 h-56 rounded-full bg-ColorFocus`} />
        )}
      
          </div>
        </div>
  
      )
      
    } else {
      temp = (
        <div className='container w-1/3 flex h-2/4 flex-wrap justify-center items-center mt-24 relative '>
          <div className='bg-triangle absolute'>
            <img src={Triangle} alt="Triangle" />
          </div>

          <div className='w-1/2 flex justify-center items-center hand relative'>
            <Choices id='paper' source={Paper} colorBg={"bg-ColorHand"} Picked={Picked} CRef={paperRef} />
          </div>

          <div className='w-1/2 flex justify-center items-center'>
            <Choices id='scissors' source={Scissors} colorBg={"bg-ColorScissor"} Picked={Picked} CRef={scissorsRef} />
          </div>

          <div className=''>
            <Choices id='rock' source={Rock} colorBg={"bg-ColorRock"} Picked={Picked} CRef={rockRef} />
          </div>
        </div>
      );
    }
    SetContent(temp); // Update the content state
  }, [picked,showNewContent]);

  return (
    <>

      {content}
    </>
  );
}

export default Game;
