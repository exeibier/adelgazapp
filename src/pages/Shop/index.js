import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
//Components
import Header from '../../components/Header'
import ShopCard from './ShopCard'

//CSS
import './Shop.css'

export default class Shop extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='shop-container'>
              <Header/>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-lg-3'>
                   <ShopCard
                    imgUrl={'./img/fresa3.jpeg'}
                    productName={'fresa'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                   />
                   <ShopCard
                    imgUrl={'./img/lechuga.jpg'}
                    productName={'lechuga'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                   />
                  </div>
                  <div className='col-12 col-lg-3'>
                  <ShopCard
                    imgUrl={'./img/toronja.jpeg'}
                    productName={'toronja'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                  />
                  <ShopCard
                    imgUrl={'./img/uvas.jpg'}
                    productName={'uvas'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                  />
                  </div>
                  <div className='col-12 col-lg-3'>
                  <ShopCard
                    imgUrl={'./img/fresa3.jpeg'}
                    productName={'fresa'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                  />
                  <ShopCard
                    imgUrl={'./img/fresa3.jpeg'}
                    productName={'fresa'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                  />
                  </div>
                  <div className='col-12 col-lg-3'>
                  <ShopCard
                    imgUrl={'./img/fresa3.jpeg'}
                    productName={'fresa'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                  />
                  <ShopCard
                    imgUrl={'./img/fresa3.jpeg'}
                    productName={'fresa'}
                    productQty={'234gr'}
                    productPrice={'$56.24'}
                  />
                  </div>
                </div>
                <div className='car-button'>
                 <button>Ve tu carrito<FontAwesomeIcon icon={faShoppingCart}/></button>
                </div>
              </div>
                
            </div>
        )
    }
}