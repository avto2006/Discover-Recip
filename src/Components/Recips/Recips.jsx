import css from '../Recips/Recips.css'


import React from 'react'
import img from './images/Frame 15.png'
import img2 from './images/Frame 16.png'
import img3 from './images/Frame 17.png'
import img4 from './images/Frame 18.png'
import img5 from './images/Frame 21.png'
import img6 from './images/Frame 23.png'
import img7 from './images/Frame 24.png'
import img8 from './images/Frame 22.png'
export const Recips = () => {
  return (
    <div>
            <div className="head_sec">
            <h3>Check Out Other Recipes Of Your Choice !</h3>
            </div>
            <div id='category' className="rec_section">
                <ul>
                <li>
                    <a href="https://www.loveandlemons.com/salad-recipes/" target='_blank'>
                      <img className='img' src={img} alt="" />
                      <p>Salads</p>
                    </a>
                </li>
                <li><a href="https://www.loveandlemons.com/appetizers/" target='_blank'>
                    <img className='img'  src={img2} alt="" />
                      <p>Appetizer</p>
                    </a></li>
                <li><a target='_blank' href="https://www.loveandlemons.com/easy-dinner-ideas/?gad_source=1&gad_campaignid=23243038975&gbraid=0AAAABB7vB7kzycQCeqdiwU2w_OTfp8pkJ&gclid=CjwKCAiAzrbIBhA3EiwAUBaUdcico1pCUWFcMN0GrJiboE9T2Sa-YTnHAu0PGKk9zjWVjGO6dPbu7BoCcLcQAvD_BwE">
                    <img className='img'  src={img3} alt="" />
                      <p>Main Course</p>
                    </a></li>
                <li><a target='_blank' href="https://www.delish.com/cooking/g1956/best-cookies/?gad_source=1&gad_campaignid=23229487395&gbraid=0AAAABB8VvfT446Q-rNafRObWS-rHYI0cY&gclid=CjwKCAiAzrbIBhA3EiwAUBaUdXsxEttJZHQBRp7lEklmPIa_wy5kMadX2fKuI-V6M_W2iW1_QRfjZxoC9goQAvD_BwE">
                    <img className='img'  src={img4} alt="" />
                      <p>Dessert</p>
                    </a></li>
                </ul>
            </div>

                <div className="head_sec2">
                    <h3>Check Out By Region !</h3>
                </div>

                <div className="rec_section2">
                        <ul>
                <li>
                    <a href="https://www.clubmahindra.com/blog/food/traditional-gujarati-cuisine-dishes" target='_blank'>
                      <img className='img' src={img5} alt="" />
                      <p>Gujarati</p>
                    </a>
                </li>
                <li><a href="https://www.vegrecipesofindia.com/recipes/punjabi-recipes/" target='_blank'>
                    <img className='img'  src={img6} alt="" />
                      <p>Punjabi</p>
                    </a></li>
                <li><a href="https://www.indianhealthyrecipes.com/recipes/south-indian-recipes-food/" target='_blank'>
                    <img className='img'  src={img7} alt="" />
                      <p>South Indian</p>
                    </a></li>
                <li><a href="https://www.simplyrecipes.com/easy-chinese-recipes-11751238" target='_blank'>
                    <img className='img'  src={img8} alt="" />
                      <p>Chinese</p>
                    </a></li>
                </ul>
                </div>
            </div>
   
  )
}

export default Recips
