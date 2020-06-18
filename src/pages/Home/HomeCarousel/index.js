import React, { Component } from 'react';

//Import carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Import
import './HomeCarousel.css'

export default class HomeCarousel extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='slider'>
                <Carousel autoPlay infiniteLoop useKeyboardArrows showThumbs={false} showArrows={false} showStatus={false} stopOnHover interval={2000} className='slider'>
                  <div className='my-slide-1'>
                      <div className='text-wrapper'>
                        <h2>Fit U</h2>
                        <p>Come sano y cumple tus objetivos</p>
                      </div>                      
                  </div>
                  <div className='my-slide-2'>
                      <div className='text-wrapper'>
                        <h2>CREA TU PLAN</h2>
                        <p>Come sano con una dieta personalizada</p>
                      </div>                      
                  </div>
                  <div className='my-slide-3'>
                      <div className='text-wrapper'> 
                        <h2>COMPRA TU PLAN</h2>
                        <p>Todo tu plan hasta la puerta de tu casa</p>
                      </div>                      
                  </div>
                </Carousel>
            </div>
         
        )
    }
}