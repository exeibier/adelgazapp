import React, {Component} from 'react';
//Services
import {getUserData} from '../../../services/services'
//CSS
import './CardActivity.css'

export default class CardActivity extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.authTokenUser
        this.setState({
            name: token.xabier,
            email: token.email
        })

    }

    render(){
        const {name, email} = this.state
        return (
            <div className="card-activity p-1">
                <div className='card-activity-user'>
                    <h2 className='title-account'>  CUENTA </h2>
                    <div className='d-flex'>
                        <h2 className='data-account p-5'> Nombre</h2>
                        <div className='mt-3 text-activity'>
                            <p className='text-danger'>{name}</p>
                        </div>
                    </div>
                    <div className='d-flex '>
                        <h2 className='data-account p-5 '>Email</h2>
                        <div className='mt-3 text-activity'>
                            <p className='text-danger'>{email}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center p-3'>
                        <button className='btn-change '>CAMBIAR DATOS</button>
                    </div>
    
                </div>
            </div>
    
        );
    }
  
}








