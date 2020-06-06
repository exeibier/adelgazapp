import React, { Component } from 'react'
//CSS
import "./TestPhysiognomy.css"
export default class TestPhysiognomy extends Component {



    render() {
        return (
            <div className='container-fluid test-wrapper'>
                <h1 className='text-center'> ¡BIENVENIDO!</h1>
                <div className='container  wrapper-image d-flex justify-content-between'>
                    <div className='row '>
                        <div className='col-12 col-md-6 d-flex '>
                            <div className='card-content'>
                                <div className='card test'>
                                    <form>
                                        <ol>
                                            <li className='data-form'>
                                                ¿Qué edad tienes?
                                        </li>
                                        <div className='form-group'>
                                                <input className=" form-control info-test " placeholder="Edad"  ></input>
                                            </div>
                                            <li className='data-form'>
                                                ¿Eres hombre mujer?
                                         </li>
                                            <div className='d-flex justify-content-between'>
                                                <div class="form-check">
                                                    <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label data-form" for="exampleRadios1">
                                                        Hombre
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label data-form " for="exampleRadios1">
                                                        Mujer
                                                </label>
                                                </div>
                                            </div>

                                            <li className='data-form'>
                                                ¿Cuál es el diametro de tu muñeca?
                                         </li>
                                            <div className='form-group'>
                                                <input className=" form-control info-test " placeholder="cm"  ></input>
                                            </div>
                                            <li className='data-form'>
                                                ¿Cual es tu altura?
                                        </li>
                                            <div className='form-group'>
                                                <input className=" form-control info-test" placeholder="cm"  ></input>
                                            </div>
                                            <li className='data-form'>
                                                ¿Cuánto pesas hoy?
                                        </li>
                                            <div className='form-group'>
                                                <input className=" form-control info-test" placeholder="Kg"  ></input>
                                            </div>
                                            <li className='data-form'>
                                                ¿Cuál es tu nivel de actividad física?
                                       </li>
                                            <div className='d-flex justify-content-between '>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label data-form " for="exampleRadios1">
                                                        Un poco activo
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input  " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label data-form" for="exampleRadios1">
                                                        Activo
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label data-form" for="exampleRadios1">
                                                        Muy activo
                                                </label>
                                                </div>
                                            </div>
                                            <li className='data-form'>
                                                Estima tu porcentaje de grasa
                                        </li>
                                        <div className='d-flex justify-content-between' >
                                            <img  className='img-grasa'src='../img/test-fisio.jpg'>
                                            </img>
                                            <img className='img-grasa' src='../img/test-fisio.jpg'>
                                            </img>
                                            <img   className='img-grasa' src='../img/test-fisio.jpg'>
                                            </img>
                                        </div>

                                            <li className='data-form'>
                                                ¿Cuál es tu objetivo?
                                        </li>
                                            <div className='d-flex justify-content-between '>
                                                <div class="form-check">
                                                    <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label data-form " for="exampleRadios1">
                                                        Perder peso
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input input-test" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label  data-form" for="exampleRadios1">
                                                        Ganar musculo
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input input-test " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label class="form-check-label  data-form" for="exampleRadios1">
                                                        Comer saludable
                                                </label>
                                                </div>
                                            </div>


                                        </ol>

                                    </form>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        )

    }
}