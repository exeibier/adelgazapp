import React, { Component } from 'react';

//Import carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class HomeCarousel extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='container'>
                <Carousel autoPlay infiniteLoop useKeyboardArrows showThumbs={false} showArrows={false} showStatus={false} className='slider'>
                  <div className='my-slide'>
                      <img src='https://hhp-blog.s3.amazonaws.com/2020/02/healthy-eating.jpg' />
                      <h2>¿Qué es Fit U?</h2>
                      <p>Legend </p>
                  </div>
                  <div>
                      <img src="https://hhp-blog.s3.amazonaws.com/2020/02/healthy-eating.jpg" />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src="https://hhp-blog.s3.amazonaws.com/2020/02/healthy-eating.jpg" />
                      <p className="legend">Legend 3</p>
                  </div>
                </Carousel>
            </div>
         
        )
    }
}