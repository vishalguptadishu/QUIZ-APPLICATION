import React, { useState } from "react";
import Data from "./data";
import Result from "../Componennt/Result"

const Quiz= () =>{

    let [btn,setbtn]=useState(0)
    let [ops,setops]=useState("")
    let [score,setscore]=useState(0)
    const [showResult,setShowResult]=useState(false);


    const HandalNext=()=>{
        if(btn<Data.length-1){
            setbtn(btn+1)
        }else {
            setShowResult(true)
        }

        scoreFun() 
    }
     
    const HendaleOps =(i)=>{
        setops(i)
        
    }

    const scoreFun=()=>{
       if(ops==Data[btn].Correct_answer){
        setscore(score+1)
       }
    }

    const Reset=()=>{
        setShowResult(false);
        setbtn(0);
        setops(0);
        setscore(0);
    }

    return (
        
         <div className="main" >
            <div className="qus_box" >
            <p className="heading-txt">Quiz</p>
            {showResult ? (<Result score={score} totalScore={Data.length} tryAgain={Reset}/> ):(
            <>
             <div className="qus" >
                    <h1>{Data[btn].Question}</h1>
                    <br></br>
                    <div className="option" >
                    {
                    
                    Data[btn].Options.map((elem,i)=>{
                    return(
                    <div onChange={()=>{HendaleOps(i+1)}}>
                    <input type="radio" value="" name="elem" /> {elem} 
                  </div>
                    )
                    })
                    }
                    </div>
                    <br></br>
                  <button onClick={HandalNext} >Next</button>
             </div>
            

            
        
        </>)}
        </div>
        </div>
    )
}
export default Quiz;