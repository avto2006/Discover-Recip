import React, { useState } from 'react'
import css from './Main.css'


import img from './icons/search.png'
import img2 from './images/first.png'
import img3 from './images/second.png'
import img4 from './images/third.png'
export const Main = () => {
  
  return (
    <div>
         <div className="components">

            <section className="component_1">

                
                    <div className="sec_left">
                        <h1>
                            Discover Recipe <br />
                            & Delicious Food
                        </h1 >
                        <div className="explore_box">
                          <a href="https://damndelicious.net/" target='_blank'>
                            Explore More 
                          </a>
                        </div>

                    </div>

                    <div className="sec_right">
                      <img className='img2' src={img2} />
                    </div>
                

            </section>

         </div>

         <section className="component_2">
               <h3>Dish Of The Day !</h3>
               <div className="sections">
               <div className="sec_left">
               <img src={img3} />
               </div>

               <div className="sec_right">
                      <h4>Healthy Bites: <br />
                       Nourishing Sandwich Creations </h4>
                       <hr/>
                       <p>“Quick + Easy Veggie Delight Sandwich  - < br /> Elevate Your Lunch in Minutes!“</p>
                       <div className="exploreMore">
                        <a href="https://lightorangebean.com/veggie-delight-sandwiches-with-herb-chutney/" target='_blank'>
                        Explore More
                        </a>
                       </div>
               </div>
               </div>
         </section>

    </div>
  )
}

export default Main
