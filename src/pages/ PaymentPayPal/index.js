import React, { Component } from 'react'

//Component
import PayPalCheckoutButton from '../../components/PaypalCheckoutButton'
//CSS
import "./PaymentPayPal.css"
import PaymentCard from './PaymentCard'
export default class PaymentPayPal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const order = {
            customer:'Xabier',
            total:'550.00',
            items: [
                {
                    sku:'112',
                    name: 'Salmón',
                    price: '300.00',
                    quantity: 1,
                    currency: 'MXN'
                },
                {
                    sku:'99',
                    name: 'Fresa',
                    price: '125.00',
                    quantity: 2,
                    currency: 'MXN'    
                }
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
                                            <p> Tu pedido llegará aproximadamente a las: </p>
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
