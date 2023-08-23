import React from 'react';

const Snapshot = (props) => {
  const { landscapes } = props;
  const { photo, id, name, location } = landscapes;

  return (
        <article className='card-event grid grid-cols-2 gap-10 p-4 m-4'>
                <div className="relative flex items-center w-60 h-30">
                    <img src= {photo}  href={id} className="rounded opacity-90"/>
                    <h3> {name} </h3>
                    <h4> {location} </h4>
                </div>
        </article>
  );
};

export default Snapshot;