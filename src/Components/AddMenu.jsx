import css from './AddMenu.css'

import React, { useState } from 'react'

export const AddMenu = () => {
      
  /* const [title, setTitle] = useState('')
    const [ingredients,setIngredients] = useState('')
    const [message,setMessage] = useState('')
  

    const handlePost = () => {
        if(title &&  ingredients) {
            setMessage('Message sent Successfully')
            alert('Message sent Successfully')
        }
    } */
  return (
    <div>

        <section id='addMenu' className="addMenu">
            <h3>Add The Recipe Of Your Choice !</h3>

            <div className="addMenuConteiner">
                <input className='inp' type="file" name="" id="" accept='image/*' />
                <div className="upload">
                    upload photo 
                </div>
                <div className="title">
                <textarea  className='text_ar2'  name="" id="" placeholder='Title' ></textarea>
                </div>

                <div className="ingredients">
                <textarea  placeholder='Ingredients & Description' className='text_ar3' name="" id="" ></textarea>
                </div>

                <div className="post" /*onClick={handlePost}*/>
                    Post Recipe !!!
                </div>
            </div>
        </section>
    </div>
  )
}
