import React, { Component } from 'react'
import Login from '../Login'
import './UserProfile.css'
import CardProfile from './CardProfile'
export default class UserProfile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {isUserLogedIn} = this.props
        return (
            <div>
                {
                     isUserLogedIn ? (
                     <div className=' user container'>
                        <div className='row'>
                            <div className='col-12 user-profile'>
                                <div className='background-avatar'>
                                    <img className='avatar d-block' src='../img/perfil.png'></img>
                                </div>
                                <CardProfile
                                    nombre={'nombre'}
                                    contraseña={'contraseña'}
                                    nuevaContraseña={'nuevaContraseña'}
                                />
        
                            </div>
    
                        </div>
                    </div>
    
                    ):(
                        <Login/>
                    )
                }
              
            </div>
        )

    }
}