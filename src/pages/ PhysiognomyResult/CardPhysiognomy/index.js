import React, { Component } from 'react';

import {GetTest} from '../../../services/services'

//CSS
import './CardPhysiognomy.css'

export default class CardPhysiognomy extends Component {
    constructor(props){
        super(props)
        this.state = {
            ectomorph: false,
            mesomorph: false,
            endomorph: false,
            success:false
        }
    }

    async componentDidMount(){
        let response = await GetTest();
        let responseJSON = await response.json();
        if(responseJSON.success){
            localStorage.setItem('titlePhys', responseJSON.data.type)
            localStorage.setItem('messagePhys', responseJSON.data.description)
            if(localStorage.getItem('titlePhys') === 'Ectomorfo'){
                this.setState({
                    ectomorph: true
                })
            }
            if(localStorage.getItem('titlePhys') === 'Mesomorfo'){
                this.setState({
                    mesomorph: true
                })
            }
            if(localStorage.getItem('titlePhys') === 'Endomorfo'){
                this.setState({
                    endomorph:true
                })
            }
            this.setState({
                success:true
            })
        } else if (!responseJSON.success){
            this.setState({
                success:false
            })
        }
    }
  
    render(){
        const title = localStorage.getItem('titlePhys')
        const message = localStorage.getItem('messagePhys')
        const { endomorph, mesomorph, ectomorph, isEatingPlan } = this.state 
      
       
        return (
            <div>
                <div class="card">
                    <div class="card-body ">
                        {
                            endomorph ? (
                            <img className='img-fisio' src='https://quicken.com.co/wp-content/uploads/2020/01/tipos-decuerpo-endomorfo.jpg'></img>
                            ): null

                        }
                        {
                            mesomorph ? (
                            <img className='img-fisio' src='https://quicken.com.co/wp-content/uploads/2020/01/tipos-decuerpo-mesomorfo.jpg'></img>
                            ): null

                        }
                        {
                            ectomorph ? (
                            <img className='img-fisio' src='https://quicken.com.co/wp-content/uploads/2020/01/tipos-decuerpo-ectomorfo.jpg'></img>
                            ): null

                        }
                        
                        <h5 className='text-center type-physiognomy '>{title}</h5>
                        <h3 class="text-justify text-fisionomia p-3">{message}</h3>
                    </div>
                </div>
                <div className='btn-send-1 '>
                    <a href='/activity'>CONTINUAR</a>
                </div>

            </div>
            
        );
    }
   
}
