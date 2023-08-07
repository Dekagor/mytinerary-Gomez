import React, { useState } from 'react'

function Slide() {


let [step, setStep] = useState(1)

let handlerBack = () => {
    if (step != 1) {
        setStep (step - 1)
    }
}

let handlerUp = () => {
    if (step != 3) {
        setStep (step + 1)
    }
}


  return (
    <>
        <div>
            {(step == 1 || step == 2 || step == 3) ?
                <>
                    { step == 0 && step <= 3 && <>{data.map((each, key)=><Snapshot key={key} photo={each.photo} id={each.id}/>)}</> }
                    { step == 4 && step <= 7 && <>{data.map((each, key)=><Snapshot key={key} photo={each.photo} id={each.id}/>)}</> }
                    { step == 8 && step <= 11 && <>{data.map((each, key)=><Snapshot key={key} photo={each.photo} id={each.id}/>)}</> }
                </>
                :
                <>
                    <p>Fin</p>
                </>
            }
        </div>
        <button type='button' className='justify-self-center bg-gray-400 p-1 rounded' onClick={() => handlerBack ()}>Previous</button>
        <button type='button' className='justify-self-center bg-gray-400 p-1 rounded' onClick={() => handlerUp ()}>Next</button>
    </>
  )
}

export default Slide;