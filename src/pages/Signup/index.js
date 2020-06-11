import React, { Component } from 'react'



import './Signup.css'
import CardSignup from './CardSignup'
export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='signup container-fluid'>
                <div className='row '>
                    <div className='col-12 d-flex aling-items-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6 offset-md-3'>
                                    <CardSignup/>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )

    }
}
