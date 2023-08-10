import React, { useEffect, useState } from 'react'
import Carrousel from '../Carrousel/Index';





function Slide() {


let [step, setStep] = useState(1)

let handlerBack = () => {
    console.log("back");
    if (step != 1) {
        setStep (step - 1)
        console.log(step);
    }
}

let handlerUp = () => {
    console.log("right");
    if (step != 3) {
        setStep (step + 1)
        console.log(step);
    }
}

    

useEffect(()=>{
    console.log("Slide")
}, [step])



  return (
    <>
        <div>
        <Carrousel />
        </div>

        <div className="col-span-3 justify-self-center p-3 m-3">
            <button type='button' className='justify-self-center bg-gray-400 p-1 rounded' onClick={() => handlerBack ()}>Previous</button>
            <button type='button' className='justify-self-center bg-gray-400 p-1 rounded' onClick={() => handlerUp ()}>Next</button>
        </div>
    </>
  )
}

export default Slide;