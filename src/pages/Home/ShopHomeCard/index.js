import React from 'react'

//CSS
import './ShopHomeCard.css'

function ShopHomeCard ({description, imageUrl}){
    return(
    
          <div className='shop-card'>
            <div className='shop-card-img'>
              <img src={imageUrl}/>
            </div>
            <div className='shop-text'>
            <p>{description}</p>
          </div>
           </div>      
      
    )
}

export default ShopHomeCard;