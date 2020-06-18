import React, { Component } from "react";

//External components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faWeight,
  faShoppingBasket,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
//CSS
import "./Home.css";

//Components
import HomeCarousel from "../Home/HomeCarousel";
import HomeDietCard from "../Home/DietHomeCard";
import ShopHomeCard from "../Home/ShopHomeCard";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <div>
          <HomeCarousel />
          <div className="us-block">
            <div className="container">
              <div className="row icons-row">
                <div className="col-6 col-lg-3 icon-wrapper">
                  <FontAwesomeIcon icon={faLaptop} className="icon-home" />
                  <p>Crea tu cuenta y resuelve el test</p>
                </div>
                <div className="col-6 col-lg-3 icon-wrapper">
                  <FontAwesomeIcon icon={faWeight} className="icon-home" />
                  <p>Recibe tu fisionomia y tu plan alimenticio</p>
                </div>
                <div className="col-6 col-lg-3 icon-wrapper">
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className="icon-home"
                  />
                  <p>Obten tu carrito personalizado y compra facilmente</p>
                </div>
                <div className="col-6 col-lg-3 icon-wrapper">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="icon-home"
                  />
                  <p>Recibe en la comodidad de tu hogar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="diets-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 home-info">
                  <div className="home-image">
                    <img src="./img/fitu-icon.png" alt="person" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <h2>PLAN ALIMENTICIO</h2>
                  <div className="text-home-wrapper">
                    <p>
                      Crea tu plan de alimentación con solo responder nuestro
                      test, recibe toda una semana de dieta para que cumplas tus
                      objetivos mientras sigues cumpliendo tus responsabilidades
                      diarias
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 home-info">
                  <h2>ACCESO INMEDIATO</h2>
                  <div className="text-home-wrapper">
                    <p>
                      Accede de manera fácil y rápida a tu plan alimenticio y
                      compra en solo tres clicks hasta la comodidad de tu hogar
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="home-image">
                    <img src="./img/fitu-2.png" alt="person" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-cards-wrapper">
            <div className="container">
              <h2>NUESTROS PRODUCTOS</h2>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <ShopHomeCard
                    imageUrl={
                      "../img/Frutas-y-verduras-dentro-de-una-bolsa-de-papel-iStock.jpg"
                    }
                    description={
                      "Compra todos los ingredientes de tus planes alimenticios."
                    }
                  />
                </div>
                <div className="col-12 col-lg-4">
                  <ShopHomeCard
                    imageUrl={
                      "https://images.ctfassets.net/wy4h2xf1swlt/asset_63256/116b0576c45691f96b78d8d6f85dd314/iStock-862477938.jpg"
                    }
                    description={
                      "Encuentra exactamente el producto que buscas para tu plan."
                    }
                  />
                </div>
                <div className="co-12 col-lg-4">
                  <ShopHomeCard
                    imageUrl={
                      "../img/las-claves-para-elegir-una-dieta-adecuada-908701.jpg"
                    }
                    description={
                      "Paga con la seguridad de PayPal, realiza todos tus pagos sin ninguna preocupación"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
