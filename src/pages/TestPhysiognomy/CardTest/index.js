import React from 'react';

//CSS
import './CardTest.css'

function CardTest({ edad,sexo,diametroMuñeca,altura,peso,actividadFisica,porcentajeGrasa,objetivo }) {
    return (
        <form className="border border-dark p-3 rounded test-form">
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
                                    <img className='img-grasa' src='../img/test-fisio.jpg'>
                                    </img>
                                    <img className='img-grasa' src='../img/test-fisio.jpg'>
                                    </img>
                                    <img className='img-grasa' src='../img/test-fisio.jpg'>
                                    </img>
                                </div>

                                <li className='data-form'>
                                    ¿Cuál es tu objetivo?
                                        </li>
                                <div className='d-flex justify-content-between '>
                                    <div class="form-check">
                                        <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                        <label class="form-check-label data-form " for="exampleRadios1">
                                            Dieta para ganar volumen
                                                </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input input-test" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                        <label class="form-check-label  data-form" for="exampleRadios1">
                                            Dieta Tonificación
                                                </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input input-test " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                        <label class="form-check-label  data-form" for="exampleRadios1">
                                            Dieta para adelgazar
                                                </label>
                                    </div>
                                </div>
                            </ol>
                        </form>
    );
}
export default CardTest;