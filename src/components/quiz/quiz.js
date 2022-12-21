import React, { useEffect, useState } from "react";
import "./quiz.css";
import Question from "./question";
const Quiz = () => {
  const [value, setValue] = useState(0);
  const [userAnswer, setuserAnswer] = useState([Array(9).fill(null)]);
  const [selected, setSelected] = useState("");
  const [goal, setGoal] = useState(0);
  const [modal,setModal]=useState(false)
    // const answer=["frontend","frontend","frontend","frontend","frontend","frontend","frontend","frontend","frontend","frontend"]
  const answer = [
    "both",
    "Losely type language",
    "Html",
    "p",
    "Css",
    "both ",
    "index.html",
    "object",
    "0",
    "object",
  ];
// const random=()=>{
//      return Math.floor(Math.random()*10)
    
// }
useEffect(() => {
 setSelected("")
}, [])

  
  const next = () => {
    if (value <= 9) {
        if(selected ===""){
            alert("please select one")
        }else{
            userAnswer[value] = selected;
            if (value < 9) {
              setValue(value + 1);
            }
            
        }
     

      console.log(value);
    } else {
      console.log("over");
    }

    console.log(userAnswer);
  };
  const prev = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;

    setSelected(value);
    console.log(selected);
  };
  const submit = () => {
    var score=0;
    console.log(userAnswer);
    console.log(userAnswer.length)
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === userAnswer[i]) {
        console.log("true")
       score=score+1
      }
    }
    console.log(score)
setGoal(score)
console.log(goal)
   setModal(true)
  };
 
  return (
    <>
    
     
      <div className="main-div">
        <h1 className="main-heading">IQ Level Quiz</h1>
        {modal ? (<>
        <div className="score-div">
        <p>Score is {goal}</p>
        <button onClick={()=>{setModal(false);window.location.reload()}}>Take quiz again</button>
        </div>
        </>):
        (<>
            <div className="question-div">
          <p className="main-question">
            <b>
              <i>
                <u>(Question {value + 1})</u>
              </i>
            </b>{" "}
            {Question[value].ques}
          </p>
          <form>
          <div className="options-div">
          
            <label for="opt1">
              <b>(a)</b> {Question[value].opt1}
            </label>
            <input
              type="radio"
              name="opt1"
              id="opt1"
              value={Question[value].opt1}
              // onChange={(e) => {
              //   handleChange(e);
              // }}
              onClick={(e) => {
                handleChange(e);
              }}
            />

            <label for="opt2">
              <b>(b)</b> {Question[value].opt2}
            </label>
            <input
              type="radio"
              name="opt1"
              id="opt2"
              value={Question[value].opt2}
              // onChange={(e) => {
              //   handleChange(e);
              // }}
              onClick={(e) => {
                handleChange(e);
              }}
            />

            <label for="opt3">
              <b>(c)</b> {Question[value].opt3}
            </label>
            <input
              type="radio"
              name="opt1"
              id="opt3"
              value={Question[value].opt3}
              // onChange={(e) => {
              //   handleChange(e);
              // }}
              onClick={(e) => {
                handleChange(e);
              }}
            />

            <label for="opt4">
              <b>(d)</b> {Question[value].opt4}
            </label>
            <input
              type="radio"
              name="opt1"
              id="opt4"
              value={Question[value].opt4}
              // onChange={(e) => {
              //   handleChange(e);
              // }}
              onClick={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="next-prev-btn">
            {/* <div> */}
            <button
              onClick={() => {
                prev();
              }}
            >
              Previous
            </button>
            <button
            // type="reset"
              onClick={() => {
                next();
              }}
            >
               {/* <input type="reset" value="Reset" 
                onClick={() => {
                next();
              }} 
              /> */}
              Next 
             </button>
            {/* </div> */}
          </div>
          <div className="submit-btn">
            <span>{value + 1}/10</span>
            <button
              onClick={() => {
                submit();
              }}
            >
              Submit Quiz
            </button>
          </div>
          </form>
        </div>
      
        </>)}
        
      </div>
    </>
  );
};

export default Quiz;
