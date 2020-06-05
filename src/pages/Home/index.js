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
          <div className='us-block'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-6 image-us'>
                  <img src='../img/logo.jpeg'/>
                </div>
                <div className='col-12 col-lg-6'>
                  <h2>NOSOTROS</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    )
  }
}