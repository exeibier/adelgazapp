import React, { Component } from 'react'
//CSS
import "./UserProfile.css"
export default class UserProfile extends Component {
    render() {
        return (

            <div className='container' >
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3 user-profile'>

                        <img className='avatar d-block mx-auto' src='../img/perfil.png'></img>
                        <div class="card-profile">
                            <div className='card-cuenta'>
                                <h2 className='title-user'>  CUENTA </h2>
                                <form className='p-5'>

                                    <div className='form-group'>
                                        <input className="input-g form-control" placeholder="Nombre" ></input>
                                    </div>

                                    <div className='form-group'>
                                        <input className="input-g form-control" placeholder="Contraseña actual" ></input>
                                    </div>
                                    <div className='form-group'>
                                        <input className="input-g form-control" placeholder="Nueva contraseña" ></input>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h2 className='update-photo m-0'> Actualiza foto de perfil</h2>
                                        <button className='btn-update'>SUBIR FOTO</button>
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