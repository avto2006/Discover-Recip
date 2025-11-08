import React from 'react'
import GroupImg from './icons/Group.svg'

export const Nav = () => {
  return (
    <div>
       <nav>
          <div className="nav_left">
              <ul>
                <li className='home'><a href="#">Home</a></li>
                <li className='addMenu'><a href="#">Add Menu</a></li>
              </ul>
          </div>

          <div className="user_right">
                <img src={GroupImg} />
                <h5>User Name</h5>
          </div>
       </nav>
    </div>
  )
}


export default Nav
