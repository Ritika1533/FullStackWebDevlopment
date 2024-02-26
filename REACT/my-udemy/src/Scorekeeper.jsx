import { useState } from "react"
export default function Scorekeeper(){
const [scores,setScores]=useState({p1score:0,p2score:0});
function incP1Score(){
   /* scores.p1score+=1;
    console.log(scores.p1score);
    setScores(scores);
  const newScore=  {...scores,p1score:scores.p1score+1};
  console.log(newScore);
  setScores(newScore);*/
  setScores((oldScore)=>{
    return  {...oldScore,p1score:oldScore.p1score+1}
  })
}
  function incP2Score(){
       setScores((preScore)=>{
        return  {...preScore,p2score:preScore.p2score+1}
       })
  }


    return (
        <>
        <p>player1 score: {scores.p1score}</p>
        <p>player2 score: {scores.p2score}</p>
        <button onClick={incP1Score}>+1 player1</button>
        <button onClick={incP2Score}>+1 player2</button>
        </>
    )
}