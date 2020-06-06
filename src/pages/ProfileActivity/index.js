import React, { Component } from 'react'
//CSS
import "./ProfileActivity.css"
export default class ProfileActivity extends Component {
    render() {
        return (
            <div className='container '>
                <div className='row' >
                    <div className='col-12 col-md-6 offset-md-3 user-activity' id="scroll"  >
                        <img className='avatar d-block mx-auto' src='../img/perfil.png'></img>
                        <div class="card-activity">
                            <div className='card-activity-user'>
                                <h2 className='title-account'>  CUENTA </h2>
                                <div className='d-flex '>
                                    <h2 className='data-account'> Nombre</h2>
                                    <div className=' '>
                                        <input className="input-current form-control" placeholder="Angelica Gallegos" ></input>
                                    </div>
                                </div>
                                <div className='d-flex '>
                                    <h2 className='data-account '>Email</h2>
                                    <div className=''>
                                        <input className="input-current form-control m-4" placeholder="example@gmail.com" ></input>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button className='btn-change'>CAMBIAR DATOS</button>
                                </div>

                            </div>
                        </div>
                        <div class="card-activity">
                            <div className='card-activity-user'>
                                <h2 className='title-account'>  PLANES ALIMENTICIOS </h2>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan'> LOREM IPSUM</h2>
                                    <div className=' '>
                                        <button className='btn-view'>VER</button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan '>LOREM IPSUM </h2>
                                    <div className=''>
                                        <button className='btn-view'>VER</button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan '>LOREM IPSUM</h2>
                                    <div className=''>
                                        <button className='btn-view'>VER</button>
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

