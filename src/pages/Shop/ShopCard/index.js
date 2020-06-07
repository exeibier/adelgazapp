import React from 'react';

//CSS
import './ShopCard.css'

function ShopCard({imgUrl, productName, productQty, productPrice,}){
    return(
        <div className='card-shop'>
            <div className='shop-card-img'>
              <img src={imgUrl}/>
            </div>
            <div className='shop-text'>
             <p>{productName}</p>
              <p>{productQty}</p>
              <p><b>{productPrice}</b></p>
              <button>AGREGAR</button>
            </div>

      </div>
    )
}

export default ShopCard;