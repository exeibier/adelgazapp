import React, { Component } from 'react'
//CSS
import "./Signup.css"
export default class Signup extends Component {



    render() {
        return (
            <div className='signup container-fluid full-height'>
                <div className='row full-height'>
                    <div className='col-12 d-flex aling-items-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6 offset-md-3 '>
                                    <div class="card-wrapp">
                                        <div className='card'>
                                            <h2 className='title-signup'> REGISTRO </h2>
                                            <form className='p-5'>

                                                <div className='form-group'>
                                                    <input className="input-email form-control " placeholder="Email" ></input>
                                                </div>
                                                <div className='form-group'>
                                                    <input className="input-email form-control " placeholder="Nombre" ></input>
                                                </div>
                                                <div className='form-group'>
                                                    <input className="input-email form-control " placeholder="Apellido" ></input>
                                                </div>
                                                <div className='form-group'>
                                                    <input className="input-email form-control " placeholder="contraseña" ></input>
                                                </div>
                                                        <button className='btn-send my-3 btn-block'>ENVIAR</button>                                     
                                            </form>
                                            <h5> No llego tu correo de verificación | Verificar registro</h5>
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