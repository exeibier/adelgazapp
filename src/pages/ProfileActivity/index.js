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
                        <div class="card-activity p-1">
                            <div className='card-activity-user'>
                                <h2 className='title-account'>  CUENTA </h2>
                                <div className='d-flex '>
                                    <h2 className='data-account p-5'> Nombre</h2>
                                    <div className='p-4 mt-3'>
                                        <input className="input-current form-control " placeholder="Angelica Gallegos" ></input>
                                    </div>
                                </div>
                                <div className='d-flex '>
                                    <h2 className='data-account p-5 '>Email</h2>
                                    <div className='p-4 mt-3'>
                                        <input className="input-current form-control" placeholder="example@gmail.com" ></input>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center p-3'>
                                    <button className='btn-change '>CAMBIAR DATOS</button>
                                </div>

                            </div>
                        </div>
                        <div class="card-activity p-1">
                            <div className='card-activity-user'>
                                <h2 className='title-account'>  PLANES ALIMENTICIOS </h2>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan p-5'> LOREM IPSUM</h2>
                                    <div className='p-4 mt-3 '>
                                        <button className='btn-view'>VER</button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan p-5'>LOREM IPSUM </h2>
                                    <div className='p-4 mt-3'>
                                        <button className='btn-view'>VER</button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan p-5'>LOREM IPSUM</h2>
                                    <div className='p-4 mt-3'>
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

