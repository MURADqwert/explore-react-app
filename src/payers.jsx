import { useState } from "react"

export default function Player(){
    const [runs, setRuns] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);



    const hitSingle = ()=>{
        const updateRuns = runs + 1 ;
        setRuns(updateRuns);
    }
     const hitDouble = ()=>{
        const updateRuns = runs + 2 ;
        setRuns(updateRuns);
    }
     const hitTriple = ()=>{
        const updateRuns = runs + 3 ;
        setRuns(updateRuns);
    }
     const hitFour = ()=>{
        const updateRuns = runs + 4 ;
        const newCount = fours + 1 ;

        setRuns(updateRuns);
        setFours(newCount);
    }
     const hitSix = ()=>{
        const updateRuns = runs + 5 ;
        const newCount = sixes + 1 ;

        setRuns(updateRuns);
        setSixes(newCount);
    }

    return(
        <>
         <h2>Team : Australia</h2>
         <p>Score : {runs} runs. </p>
         {
            runs >= 50 && <p>Congrates!! Its Fifty..!</p>
         }
         <p>HIT: Four ={fours} Sixex = {sixes}</p>
         <div>
        <button onClick={hitSingle}>Single</button>
         <button onClick={hitDouble}>Double</button>
         <button onClick={hitTriple}>Triple</button>
         <button onClick={hitFour}>Four</button>
         <button onClick={hitSix}>Six</button>
         </div>
        </>
    )
}