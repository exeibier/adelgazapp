import React from 'react';

//CSS
import './DietHomeCard.css'

function DietHomeCard({image, title} ){
    return(
        <div className='card-diet'>
          <div className='diet-name'>
            <a href='#'>
              <p>{title}</p>
            </a>
           </div>
         </div>
    )
}

export default DietHomeCard;