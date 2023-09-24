import React, { useEffect, useRef, useState } from 'react';
import Paper from '../assets/icon-paper.svg';
import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import Choices from './Choices';
import Triangle from '../assets/bg-Triangle.svg';

function Game({SetScore,score}) {
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
  const [msg,Setmsg]=useState(null)
  const [rand,setRand]=useState(null)
  // Function to change the content after a delay
  const changeContentWithDelay = (cjoueur) => {
    let CComputer=computerChoice()
    console.log(CComputer)
    setRand(CComputer)
  

    setTimeout(() => {
     
     
      setResult(Result(cjoueur,CComputer))
      console.log(ReturnChoice(CComputer))
      setShowNewContent(true);
    }, 1000); // Change content after 3 seconds (adjust the delay as needed)

  };
  useEffect(()=>{
    SetChoiceComputer(ReturnChoice(rand))
  },[rand,result])
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
   
    let sr_c;
    let color_sr_c;
    if(picked==="paper"){
      sr_c=Paper
      color_sr_c="bg-ColorHand"
    }else if(picked==="rock"){
      sr_c=Rock
      color_sr_c="bg-ColorRock"
    }else{
      sr_c=Scissors
      color_sr_c="bg-ColorScissor"
    }
    console.log("result:PICKED",msg,":",picked)
    return (
   <div className={`${(msg===picked)? "solution" : ""} outside-circle w-72 h-72 max-md:w-32 max-md:h-32 cursor-pointer ${color_sr_c}`} >
    <div className='inside-circle w-52 h-52  max-md:w-24 max-md:h-24  bg-white '>
        <img src={sr_c} alt="Paper" className='w-24  max-md:w-10'/>
    </div>
  </div>
  );
  }
  const Result=(Jchoice,Cchoice)=>{
    const combinations = [
      "paper vs rock",
      "scissors vs paper",
      "rock vs scissors"
    ];
    var message=''
    var colormessage='text-ColorRules'
    for (let i = 0; i < combinations.length; i++) {
      console.log(combinations[i],',',Cchoice)
      if(combinations[i].includes(Jchoice) && combinations[i].includes(Cchoice)){
        console.log('#####')
        let temp=combinations[i].split(" vs ")
        console.log(temp[0],',',temp[1])
        console.log(Jchoice,',',Cchoice)

        if(temp[0]===Jchoice && temp[1]===Cchoice){
          SetScore((prev)=>prev+1)
         
         
          message="YOU WIN"

        }else if(temp[0]===Cchoice && temp[1]===Jchoice){
          SetScore((prev)=>prev-1)
        
  
          message="YOU LOST"
          colormessage='text-red-500'
        }else{
          message="EQUAL"

        }
        

        Setmsg(temp[0])
        return (
          <div className='flex flex-col justify-center md:gap-10  max-md:gap-4 items-center h-fit mx-20 max-md:mt-10'>
             <p className='text-5xl text-white font-bold max-md:text-4xl '>{message}</p>
             <button className={`${colormessage} font-semibold w-48 bg-white py-3 rounded-md`} onClick={()=>{
              SetPicked(null);setShowNewContent(null);SetChoiceComputer(null);setResult(null);Setmsg(null);
              document.querySelector('.outside-circle').classList.remove('solution')
            }
              }>PLAY AGAIN</button>
          </div>
         );
      }

    }
  }
  useEffect(()=>{
    localStorage.setItem('score',score);
  },[score])
  useEffect(() => {
    var temp = null;
    if (picked !== null) {
      let choice=null
 
      // console.log(picked)
     choice= ReturnChoice(picked)
      temp=(
        <div className='flex w-1/2 max-md:w-full min-xl:gap-20 justify-center items-center md:mt-24 max-md:mt-20'>

          <div className='picked max-md:flex-col-reverse flex flex-col w-1/2  items-center'>
            <h3 className='text-white text-3xl max-md:mt-8  md:mb-14 text-center max-md:text-xl'>YOU PICKED</h3>
            {choice}
          </div>
              { choice!==null && choiceCompute!==null &&(
              <div className='max-md:absolute top-2/3'>
                {result}
              </div> 
                )
     
            } 

          <div className='picked max-md:flex-col-reverse flex flex-col w-1/2  items-center'>
            <h3 className='text-white text-3xl max-md:mt-8  md:mb-14 text-center max-md:text-xl'>THE HOUSE PICKED</h3>
            {showNewContent  ? (
              /* This content will be shown after the delay */
                choiceCompute
                ) : (
                  /* This content will be shown initially   */
                  <div className={`w-56 h-56  max-md:w-24 max-md:h-24 m-4 md:m-8 rounded-full bg-ColorFocus`} />
                )}
          </div>
        </div>
  
      )
      
    } else {
      temp = (
        <div className='container w-1/3 max-md:w-full  max-xl:w-1/2 flex h-2/4 flex-wrap justify-center items-center mt-24 relative '>
          <div className='bg-triangle absolute'>
            <img src={Triangle} alt="Triangle" className='max-md:w-98' />
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
  }, [picked,showNewContent,result,choiceCompute]);

  return (
    <>
      
      {content}
    </>
  );
}

export default Game;
