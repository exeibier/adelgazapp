import React, {Component} from 'react'

//CSS
import './Home.css'

//Components
import HomeCarousel from '../Home/HomeCarousel'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='Home'>
        <div>
          <HomeCarousel/>
        </div>
      </div>
    )
  }
}