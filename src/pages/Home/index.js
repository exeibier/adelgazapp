import React, {Component} from 'react'

//CSS
import './Home.css'

//Components
import HomeCarousel from '../Home/HomeCarousel'
import HomeDietCard from '../Home/DietHomeCard'
import ShopHomeCard from '../Home/ShopHomeCard'

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
          <div className='diets-wrapper'>
            <div className='container'>
            <h2>PLANES ALIMENTICIOS</h2>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <HomeDietCard title={'Vegeteriano'}/>
                  <div className='card-diet'>
                  <HomeDietCard title={'Keto'}/>
                  </div>
                  
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='card-diet'>
                  <HomeDietCard title={'Bajar Grasa '}/>
                  </div>
                  <div className='card-diet'>
                  <HomeDietCard title={'Subir Musculo'}/>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className='shop-cards-wrapper'>
            <div className='container'>
              <h2>NUESTROS PRODUCTOS</h2>
              <div className='row'>
                <div className='col-12 col-lg-4'>
                  <ShopHomeCard 
                    imageUrl={'../img/Frutas-y-verduras-dentro-de-una-bolsa-de-papel-iStock.jpg'}
                    description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit a voluptate error, voluptas quidem quisquam illo ducimus hic similique culpa?'}
                  />
                </div>
                <div className='col-12 col-lg-4'>
                  <ShopHomeCard 
                    imageUrl={'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/quick-chicken-and-hummus-bowl.jpg'}
                    description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit a voluptate error, voluptas quidem quisquam illo ducimus hic similique culpa?'}
                  />
                </div>
                <div className='co-12 col-lg-4'>
                  <ShopHomeCard 
                    imageUrl={'../img/las-claves-para-elegir-una-dieta-adecuada-908701.jpg'}
                    description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit a voluptate error, voluptas quidem quisquam illo ducimus hic similique culpa?'}
                  />
                </div>
              </div>  
              <div className='btn-home-wrapper'>
              <a href='#'>
                <div className='btn-home'>
                  <p >Ver más</p>
                </div>
              </a>
                
              </div>
            </div>
          </div>
         
        </div>
      </div>
    )
  }
}