import React from 'react'
import "./tic_tac_toe.css"
import { useState,useEffect } from 'react'
const Tic_tac_toe = () => {
const [value,setValue]=useState(Array(9).fill(null))
const [isXturn,setisXturn]=useState(true)
const win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]



  const square=(i)=>{
    return ( <button  className='square-btn' onClick={()=>{handleClick(i)}}>{value[i]}</button>)
   
  }
  const decideWinner=()=>{
    for (let logic of win){
      const [a,b,c]=logic
      console.log(a,b,c)
      if(value[a] !== null && value[a]===value[b] && value[a]===value[c]){
        return true
    
      }
      
    }
    return false
  }
  const checkDraw=()=>{
    // value.every(!null)
    for(let draw of value){
      if(draw===null){
        return false
      }
    }
    return true
    
  }
  const checkWinner=decideWinner()
  // const checkWinner=true
  const decideDraw=checkDraw()
  const handleClick=(i)=>{
  //  win.map((elem)=>{
  //   const [a,b,c]=elem
  //   console.log(a,b,c)
  //   if(value[a]===value[b] && value[a]===value[c]){
  //     return(
  //       <>
  //       <p>someoe won</p>
  //       </>
  //     )
  //     console.log("won")
  //   }
  //  })

 if(checkWinner!==true){
  const copyArray=value
  if(copyArray[i] === null){

    copyArray[i]=isXturn ? "X":"O"
    setValue(copyArray)
    setisXturn(!isXturn)
  }
 }

  }

  
  const replay=()=>{
  setValue(Array(9).fill(null))
  }
  return (
    <>
<div className="main-div">
    <div className='tic-head'>
    <p>Tic Tac Toe</p>
   
    </div>
    {checkWinner ?(<><div className='winner-div'><p>{isXturn ? ('"O"'):('"X"')} won the game</p>  <button onClick={replay}>Replay</button> </div></>):(null)}
    {decideDraw ?(<><div className='winner-div'><p>its a DRAW!!</p>  <button onClick={replay}>Replay</button> </div></>):(null)}
   
   

     <div className='turn-div'>
     <p className='player-turn'>{isXturn ? "X":"O"} turn</p>
     </div>
    <div className="board">
  
<div className='board-row'>
<span className='span1'>{square(0)}</span>
<span className='span2'>{square(1)}</span>
<span className='span3'>{square(2)}</span>
</div>
<div className='board-row'>
<span className='span4'>{square(3)}</span>
<span className='span5'>{square(4)}</span>
<span className='span6'>{square(5)}</span>
</div>
<div className='board-row'>
<span className='span7'>{square(6)}</span>
<span className='span8'>{square(7)}</span>
<span className='span9'>{square(8)}</span>
</div>
    </div>
    <button onClick={replay} className="everytime-replay">Replay</button>
    </div>
    </>
  )
}

export default Tic_tac_toe