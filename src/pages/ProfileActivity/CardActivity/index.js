import React, {Component} from 'react';
//Services
import {getUserData} from '../../../services/services'
//CSS
import './CardActivity.css'
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';

export default class CardActivity extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            lastName:''
        }
    }

    componentDidMount(){
        const name = localStorage.getItem('authNameUser')
        const lastName = localStorage.getItem('authLastNamenUser')
        this.setState({
            name: name,
            lastName: lastName
        })

    }

    render(){
        const {name, lastName} = this.state
        return (
            <div className="card-activity p-1">
                <div className='card-activity-user'>
                    <h2 className='title-account'>  CUENTA </h2>
                    <div className='d-flex'>
                        <h2 className='data-account p-5'> Nombre</h2>
                        <div className='mt-3 text-activity'>
                            <p className='text-dark'>{name}</p>
                        </div>
                    </div>
                    <div className='d-flex '>
                        <h2 className='data-account p-5 '>Apellido</h2>
                        <div className='mt-3 text-activity'>
                            <p className='text-dark'>{lastName}</p>
                        </div>
                    </div>
    
                </div>
            </div>
    
        );
    }
  
}








