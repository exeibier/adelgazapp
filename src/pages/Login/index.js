import React, { Component } from 'react'
//CSS
import "./Login.css"
export default class Login extends Component {



    render() {
        return (
            <div className='login container-fluid full-height'>
                <div className='row full-height'>
                    <div className='col-12 d-flex aling-items-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6 offset-md-3 '>
                                    <div class="card-general">
                                        <div className='card'>
                                            <h2 className='title-login'> INICIA SESIÓN </h2>
                                            <form className='p-5'>

                                                <div className='form-group'>
                                                    <input className="input-email form-control " placeholder="Email" ></input>
                                                </div>
                                                <div className='form-group'>
                                                    <input className="input-email form-control " placeholder="Contraseña" ></input>
                                                </div>

                                                
                                                        <button className='btn-send my-3 btn-block'>ENVIAR</button>
                                                   
                                                
                                            </form>
                                            <h5 > No llego tu correo de verificación | Verificar registro</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )

    }
}