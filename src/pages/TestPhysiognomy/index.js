import React, { Component } from "react";

import "./TestPhysiognomy.css";
import CardTest from "./CardTest";
export default class TestPhysiognomy extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className=" user container">
        <div className="container test-wrapper ">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center welcome my-3 mt-5 "> ¡BIENVENIDO!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="wrapper-image w-100 h-100 border rounded-lg d-none d-md-block">
                <h2>TIPS</h2>
                <p>
                  º Incorporar a diario alimentos de todos los grupos y realizar
                  al menos 30 minutos de actividad física
                </p>
                <p>Tomar a diario 8 vasos de agua segura</p>
                <p>
                  º Consumir a diario 5 porciones de frutas y verduras en
                  variedad de tipos y colores
                </p>
                <p>
                  º Reducir el uso de sal y el consumo de alimentos con alto
                  contenido de sodio
                </p>
                <p>
                  º Limitar el consumo de bebidas azucaradas y de alimentos con
                  elevado contenido de grasas, azúcar y sal
                </p>
                <p>
                  º Consumir diariamente leche, yogur o queso, preferentemente
                  descremados
                </p>
                <p>
                  º Al consumir carnes quitarle la grasa visible, aumentar el
                  consumo de pescado e incluir huevo
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <CardTest />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
