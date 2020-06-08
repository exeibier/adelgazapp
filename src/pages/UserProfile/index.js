import React, { Component } from 'react'
//CSS
import "./UserProfile.css"
export default class UserProfile extends Component {
    render() {
        return (

            <div className=' user container' >
                <div className='row'>
                    <div className='col-12 user-profile'>
                        <div className='background-avatar'>
                        <img className='avatar d-block' src='../img/perfil.png'></img>
                        </div>
                        <div class="card-profile">
                            <div className='card-cuenta p-4' >
                                <h2 className='title-user'>  CUENTA </h2>
                                <form className=''>
                                    <div className='form-group'>
                                        <input className="input-g form-control" placeholder="Nombre" ></input>
                                    </div>

                                    <div className='form-group'>
                                        <input className="input-g form-control" placeholder="Contraseña actual" ></input>
                                    </div>
                                    <div className='form-group'>
                                        <input className="input-g form-control" placeholder="Nueva contraseña" ></input>
                                    </div>
                                    <div className='d-flex justify-content-between '>
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