import css from './AddMenu.css'

import React, { useState } from 'react'

export const AddMenu = () => {

    const [postRecipe,setPostRecip] = useState(0)
    let text1 = document.querySelector('.text_ar2')
    let text2 = document.querySelector('.text_ar3')

    const handlePost = () => {
        
         if(text1 !== '' && text2 !== '') {
         setPostRecip(alert('Post Send Succesfully'))
    }   else if(text1 === '' && text2 !== '' ) {
        setPostRecip(alert('Please enter the title'))
    }   else if(text1 !== '' && text2 === '' ) {
        setPostRecip(alert('Please enter Ingredients and Description'))
    }   else {
        setPostRecip(alert('Please fill in the fields'))
    }
}

  return (
    <div>

        <section className="addMenu">
            <h3>Add The Recipe Of Your Choice !</h3>

            <div className="addMenuConteiner">
                <input className='inp' type="file" name="" id="" accept='image/*' />
                <div className="upload">
                    upload photo 
                </div>
                <div className="title">
                <textarea  className='text_ar2'  name="" id="" placeholder='Title'></textarea>
                </div>

                <div className="ingredients">
                <textarea  placeholder='Ingredients & Description' className='text_ar3' name="" id=""></textarea>
                </div>

                <div className="post" onClick={handlePost}>
                    Post Recipe !!!
                </div>
            </div>
        </section>
    </div>
  )
}
