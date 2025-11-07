import css from './Recips.css'


import React from 'react'
import img from './images/Frame 15.png'
import img2 from './images/Frame 16.png'
import img3 from './images/Frame 17.png'
import img4 from './images/Frame 18.png'
export const Recips = () => {
  return (
    <div>
            <div className="head_sec">
            <h3>Check Out Other Recipes Of Your Choice !</h3>
            </div>
            <div className="rec_section">
                <ul>
                <li>
                    <a href="">
                      <img className='img' src={img} alt="" />
                      <p>Salads</p>
                    </a>
                </li>
                <li><a href="">
                    <img className='img'  src={img2} alt="" />
                      <p>Appetizer</p>
                    </a></li>
                <li><a href="">
                    <img className='img'  src={img3} alt="" />
                      <p>Main Course</p>
                    </a></li>
                <li><a href="">
                    <img className='img'  src={img4} alt="" />
                      <p>Dessert</p>
                    </a></li>
                </ul>
            </div>
    </div>
  )
}

export default Recips
