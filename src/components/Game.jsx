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
  //joueur pick
  const [picked, SetPicked] = useState(null);
  //all content
  const [content, SetContent] = useState(null);
  const [choiceCompute,SetChoiceComputer]=useState(null)
  //for animation of cchoice
  const [showNewContent, setShowNewContent] = useState(false);
  //message after game 
  const [result,setResult]=useState(null)
  // Function to change the content after a delay
  const changeContentWithDelay = (pi) => {
    let CComputer=computerChoice()
    console.log(CComputer)
    SetChoiceComputer(ReturnChoice(CComputer))
  

    setTimeout(() => {
      setResult(Result(pi,CComputer))
      setShowNewContent(true);
    }, 1000); // Change content after 3 seconds (adjust the delay as needed)
  };
  const Picked = (cRef) => {
    // document.querySelector('.container').style.display = 'none';

    SetPicked(cRef.current.id);
    changeContentWithDelay(cRef.current.id)
  };
  const computerChoice=()=>{
    const choices = ["paper", "scissors", "rock"];

    // Generate a random index to select a choice from the array
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Use the random index to get the random choice
    const randomChoice = choices[randomIndex];
    return randomChoice
  }
  const ReturnChoice=(picked)=>{
    let choice=null
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
    return choice;
  }
  const Result=(Jchoice,Cchoice)=>{
    const combinations = [
      "paper vs rock",
      "scissors vs paper",
      "rock vs scissors"
    ];
    for (let i = 0; i < combinations.length; i++) {
      console.log(combinations[i],',',Cchoice)
      if(combinations[i].includes(Jchoice) && combinations[i].includes(Cchoice)){
        console.log('#####')
        let temp=combinations[i].split(" vs ")
        console.log(temp[0],',',temp[1])
        console.log(Jchoice,',',Cchoice)

        if(temp[0]===Jchoice && temp[1]===Cchoice){
          return (
          <div className='flex flex-col justify-center gap-10 items-center h-fit mx-20'>
             <p className='text-5xl text-white font-bold'>YOU WIN</p>
             <button className='text-ColorRules font-semibold w-48 bg-white py-3 rounded-md' onClick={()=>{SetPicked(null);setShowNewContent(null);SetChoiceComputer(null);setResult(null)}}>PLAY AGAIN</button>
          </div>
         );
        }else if(temp[0]===Cchoice && temp[1]===Jchoice){
          return (
            <div className='flex flex-col justify-center gap-10 items-center h-fit mx-20'>
             <p className='text-5xl text-white font-bold'>YOU LOST</p>
              <button className='text-red-500 font-semibold w-48 bg-white py-3 rounded-md' onClick={()=>{SetPicked(null);setShowNewContent(null);SetChoiceComputer(null);setResult(null)}}>PLAY AGAIN</button>
           </div>

           );

        }else{
          return (
            <div className='flex flex-col justify-center gap-10 items-center h-fit mx-20'>
             <p className='text-5xl text-white font-bold'>EQUAL</p>
              <button className='text-ColorRules font-semibold w-48 bg-white py-3 rounded-md' onClick={()=>{SetPicked(null);setShowNewContent(null);SetChoiceComputer(null);setResult(null)}}>PLAY AGAIN</button>
           </div>
           );

        }
      }

    }
  }
  useEffect(() => {
    var temp = null;
    if (picked !== null) {
      let choice=null
 
      // console.log(picked)
     choice= ReturnChoice(picked)
      temp=(
        <div className='flex    w-1/2  justify-center items-center mt-24'>
          {/* <div className='flex w-full  items-center   mt-24 relative  ml-36'>
            <h3 className='text-white text-3xl w-1/2'>YOU PICKED</h3>
            <h3 className='text-white text-3xl  w-1/2'>THE HOUSE PICKED</h3>
          </div>

          
          
          <div className='flex z justify-start items-center gap-20  mt-24 relative'>
             {choice}
             {/* { choice!==null && choiceCompute!==null &&(
              <div>
                {result}
              </div> 
                )
     
            } }
            <div className='flex flex-col justify-center items-center h-full '>
               <p>you lost</p>
               <button className='text-ColorRules w-48 py-4 bg-white'>PLAY AGAIN</button>
            </div>
             {showNewContent ? (
              /* This content will be shown after the delay 
                choiceCompute
                ) : (
                  /* This content will be shown initially  
                  <div className={`w-56 h-56 m-8 rounded-full bg-ColorFocus`} />
                )}
          
          </div> */}
          <div className='picked flex flex-col w-1/2  items-center      '>
            <h3 className='text-white text-3xl w-1/2 mb-14 text-center'>YOU PICKED</h3>
            {choice}
          </div>
              { choice!==null && choiceCompute!==null &&(
              <div>
                {result}
              </div> 
                )
     
            } 

          <div className='computer flex flex-col w-1/2  items-center     '>
            <h3 className='text-white text-3xl  mb-14'>THE HOUSE PICKED</h3>
            {showNewContent ? (
              /* This content will be shown after the delay */
                choiceCompute
                ) : (
                  /* This content will be shown initially   */
                  <div className={`w-56 h-56 m-8 rounded-full bg-ColorFocus`} />
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
  }, [picked,showNewContent,result]);

  return (
    <>

      {content}
    </>
  );
}

export default Game;
