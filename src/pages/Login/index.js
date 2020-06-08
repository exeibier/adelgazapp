import React, { Component } from 'react'


import CardLogin from './CardLogin'
import './Login.css'
export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='login'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 offset-md-3 '>
                            <div class="card-general">
                               <CardLogin
                               email={'Email'}
                               contraseña={'Contraseña'}
                               />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )

    }
}
