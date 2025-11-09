import css from './AddMenu.css'

import React, { useState } from 'react'

export const AddMenu = () => {
      
    const [title, setTitle] = useState('')
    const [ingredients,setIngredients] = useState('')
    const [message,setMessage] = useState('')
  

    const handlePost = () => {
        if(title === '' &&  ingredients === '') {
            setMessage('Error')
            alert('Error')
        } else if (!title === '' && ingredients === '') {
            alert('No')
        }
    } 
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
                <textarea  className='text_ar2' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} ></textarea>
                </div>

                <div className="ingredients">
                <textarea  placeholder='Ingredients & Description' className='text_ar3' value={ingredients} ></textarea>
                </div>

                <div className="post" onClick={handlePost}>
                    Post Recipe !!!
                </div>
            </div>
        </section>
    </div>
  )
}
