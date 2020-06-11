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
                  <p>Hemos creado la solución perfecta para ti en colaboración con expertos nutriólogos en el deporte. Fit U ofrece dietas fáciles y económicas de acuerdo a tu fisionomía, integra también un carrito de compras para surtir los ingredientes necesarios para la preparación de tus recetas.</p>
                  <p>Ya no existe excusas, ya que en con un solo click puedes comer sano y realizar las compras de tus planes alimenticios, con Fit U transforma tu vida en una más saludable.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='diets-wrapper'>
            <div className='container'>
            <h2>PLANES ALIMENTICIOS</h2>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <HomeDietCard title={'Tonificar'}/>
                  <div className='card-diet'>
                  <HomeDietCard title={'Bajar Grasa '}/>
                  </div>
                  
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='card-diet'>
                  <HomeDietCard title={'Subir Musculo '}/>
                  </div>
                  <div className='card-diet'>
                  <HomeDietCard title={'Keto'}/>
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
                    description={'Compra todos los ingredientes de tus planes alimenticios.'}
                  />
                </div>
                <div className='col-12 col-lg-4'>
                  <ShopHomeCard 
                    imageUrl={'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/quick-chicken-and-hummus-bowl.jpg'}
                    description={'Encuentra exactamente el producto que buscas para tu plan.'}
                  />
                </div>
                <div className='co-12 col-lg-4'>
                  <ShopHomeCard 
                    imageUrl={'../img/las-claves-para-elegir-una-dieta-adecuada-908701.jpg'}
                    description={'Paga con la seguridad de PayPal, realiza todos tus pagos sin ninguna preocupación'}
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