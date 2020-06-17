import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';

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
                        <CardActivity/>
                       
                        <div className="card-activity p-1">
                            <div className='card-activity-user'>
                                <h2 className='title-account'>  PLANES ALIMENTICIOS </h2>
                                <div className='d-flex justify-content between'>
                                    <h2 className='data-plan p-5'> PLAN ALIMENTICIO</h2>
                                    <div className='p-4 mt-3 '>
                                        <Link to='/diets' className='btn-view'>VER</Link>
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

