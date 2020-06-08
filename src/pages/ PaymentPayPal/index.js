import React, { Component } from 'react'
//CSS
import "./PaymentPayPal.css"
export default class PaymentPayPal extends Component {
    render() {
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
                                    <div className='p-2'>
                                    <button className='btn-payment  btn-block'>ENVIAR</button>
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
