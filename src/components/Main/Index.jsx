import React from 'react';
import Article from '../Article/Index';
import Slide from '../Slide/Index';


function Main() {
  let data = [
    {title: 'Find the perfect destination', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis numquam eveniet reprehenderit sunt nam architecto modi molestias et, quae nesciunt alias voluptas quas non ipsum quisquam at. Eius, pariatur dolor!'}
  ]
  return (
    <main>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-10 mt-40 place-items-center justify-between">

          <div className="md:col-span-3 md:col-start-1 text-flex-center ml-7">
            {data.map((each, id)=><Article key={`${Math.random()}`} title={each.title} text={each.text}/>)}
          </div>

            <div className="md:col-span-2 md:col-start-4 text-flex-center">
                <img src="../public/Cayo de Agua.jpg" className="rounded opacity-60"/>
            </div>
        </section>


        <section>

    
          <Slide />
      

        </section>


    </main>
  )
}

export default Main;