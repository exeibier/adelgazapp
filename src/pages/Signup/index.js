import React, { Component } from 'react'
//CSS
import "./Signup.css"
export default class Signup extends Component {



    render() {
        return (
            <div className='signup '>
                <div className='container'>
                    <div>
                        <div class="card-wrapper">
                            <div className='card'>
                              <h2 className='title-login'>  REGISTRO </h2>
                              <form>
                              <div >
                                  <div >
                                      <input className="input-group1 "  placeholder="Email" ></input>
                                  </div>
                              </div>
                              <div >
                                  <div >
                                      <input className="input-group2" placeholder="Nombre" ></input>
                                  </div>
                              </div>
                              <div >
                                  <div >
                                      <input className="input-group1" placeholder="Apellido" ></input>
                                  </div>
                              </div>
                              <div >
                                  <div >
                                      <input className="input-group2" placeholder="Contraseña" ></input>
                                  </div>
                              </div>



                              <div >
                                  <div >
                                    <button className='btn-green'>ENVIAR</button>
                                  </div>
                              </div>
                              <h5 className='text-contraseña'> Olvidaste tu contraseña | Recuperala aquí</h5>
                              <h5 className='text-verificacion'> No llego tu correo de verificación | Verificar registro</h5>
                            </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}