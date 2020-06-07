import React, { Component } from 'react'
//CSS
import "./Login.css"
export default class Login extends Component {



    render() {
        return (
            <div className='login'>
                <div>
                    <div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6 offset-md-3 '>
                                    <div class="card-general">
                                        <div className='card user-login'>
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
                                            <h5 className='text-verificacion' > No llego tu correo de verificación | Verificar registro</h5>
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