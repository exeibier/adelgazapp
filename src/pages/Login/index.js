import React, { Component } from 'react'
//CSS
import "./Login.css"
export default class Login extends Component {



    render() {
        return (
            <div className='login '>
                <div className='container'>
                    <div>
                        <div class="card-wrapper">
                            <div className='card'>
                              <h2 className='title-login'> INICIA SESIÓN </h2>
                              <form>
                              <div >
                                  <div >
                                      <input className="input-group1 "  placeholder="Email" ></input>
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
                            </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}