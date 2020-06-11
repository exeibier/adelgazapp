import React, { Component } from 'react'

import './ProfileActivity.css'
import CardActivity from './CardActivity'
export default class ProfileActivity extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className=' activity container '>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3 user-activity' >
                        <img className='avatar d-block mx-auto' src='../img/perfil.png'></img>
                        <CardActivity/>
                       
                        <div className="card-activity p-1">
                            <div className='card-activity-user'>
                                <h2 className='title-account'>  PLANES ALIMENTICIOS </h2>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan p-5'> Plan para bajar grasa</h2>
                                    <div className='p-4 mt-3 '>
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

