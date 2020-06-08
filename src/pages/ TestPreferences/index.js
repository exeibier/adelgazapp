import React, { Component } from 'react'
//CSS
import "./ TestPreferences.css"
export default class TestPreferences extends Component {



    render() {
        return (
            <div className='container wrapper-preferences'>
                <div className='row'>  
                    <div className='col-12 '>
                    <h1 className='text-plan'>ELIJA SU TIPO DE PLAN ALIMENTICIO</h1>

                        <div class="card  card-preferences">
                            <div class="card-body">
                                <div class="card" >
                                    <div class="card-body ">
                                        <div class="form-check">
                                            <input class="form-check-input input-preferences " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                            <label>Dieta volumen</label>
                                        </div>
                                        <div>
                                            <p className='diet'>Lleva condsigo un cambio considerable de las cantidades en carbohidratos, proteínas y grasas, en función de la cantidad de masa muscular que se quiera ganar.</p>
                                        </div>

                                    </div>
                                </div>


                            </div>

                            <div class="card-body">
                                <div class="card" >
                                    <div class="card-body ">
                                        <div class="form-check">
                                            <input class="form-check-input input-preferences " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                            <label>Dieta tonificación</label>
                                        </div>
                                        <div>
                                            <p className='diet'>Se trata de un plan equilibrado, en el que no se abusa de ningún alimento,es una ayuda necesaria para combatir la flacidez.</p>
                                        </div>



                                    </div>
                                </div>

                            </div>

                            <div class="card-body">
                                <div class="card" >
                                    <div class="card-body "><div class="form-check">
                                        <input class="form-check-input input-preferences " for="exampleRadios1" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                        <label>Dieta para adelgazar</label>
                                    </div>
                                        <div>
                                            <p className='diet'>Este plan aumenta el consumo de los alimentos antioxidantes (frutas, verduras, infusiones o especias) y disminuiye o elimina los alimentos perjudiciales, existentes en hidratos refinados y grasas malas</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button className='btn-diet my-3  btn-block btn-plan'>GUARDAR</button>
                        </div>

                    </div>
                </div>

            </div>


        )

    }
}