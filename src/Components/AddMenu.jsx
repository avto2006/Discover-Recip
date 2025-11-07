import css from './AddMenu.css'

import React from 'react'

export const AddMenu = () => {
  return (
    <div>

        <section className="addMenu">
            <h3>Add The Recipe Of Your Choice !</h3>

            <div className="addMenuConteiner">
                <textarea className='text_ar'>

                </textarea>
                <div className="upload">
                    upload photo 
                </div>
                <div className="title">
                <textarea className='text_ar2'  name="" id="" placeholder='Title'></textarea>
                </div>

                <div className="ingredients">
                <textarea placeholder='Ingredients & Description' className='text_ar3' name="" id=""></textarea>
                </div>

                <div className="post">
                    Post Recipe !!!
                </div>
            </div>
        </section>
    </div>
  )
}
