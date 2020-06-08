import React, { Component } from 'react'


import PaymentCard from './PaymentCard'
import './PaymentPayPal.css'
export default class PaymentPayPal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container wrapper-payment p-5'>
                <h5 className=' title-paypal text-center '>REALIZA TU PAGO</h5>
                <div className='row'>
                    <div className='col-12'>
                       <PaymentCard
                       deliveryTime={'Tu pedido será entregado a las:'}
                       />
                    </div>
                </div>
            </div>
        )

    }
}
