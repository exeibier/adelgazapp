import React, { Component } from 'react'

//Component
import PayPalCheckoutButton from '../../components/PaypalCheckoutButton'
//CSS
import "./PaymentPayPal.css"
export default class PaymentPayPal extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

   async componentDidMount(){

    }
    render() {
        const order = {
            customer:'Xabier',
            total:localStorage.getItem('totalCart'),
            items: [
               
            ]
        };
        return (
            <div className='container  wrapper-payment p-5'>
                <h5 className='title-paypal text-center '>REALIZA TU PAGO</h5>
                <div className='row '>
                    <div className='col-12 card-top '>
                        <div class="card card-mobile justify-content-between p-5" >
                            <div class="row card-paypal ">
                                <div className='col-12 col-md-6 '>
                                    <img className='paypal-logo ' src='../img/PayPal-Logo.png'></img>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div class="card card-envio">
                                        <div class="card-body order-shop">
                                            <p> Tu pedido llegará a la siguiente dirección: </p>
                                        </div>
                                    </div>
                                    <div className='btn-payment'>
                                    <PayPalCheckoutButton order = {order}/>
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
