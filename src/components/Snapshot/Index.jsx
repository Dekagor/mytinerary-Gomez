import React from 'react';

function Snapshot ({photo, id}) {
  return (
    <>
        <>
            <div className='grid grid-cols-2 gap-10 p-4 m-4'>

                <div className="w-60 h-30">

                    <img src={photo}  href={id} className="rounded opacity-90"/>

                </div>
                
            </div>
        </>
    </>
  )
}

export default Snapshot;