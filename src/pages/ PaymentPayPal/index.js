import React, { Component } from 'react'
//CSS
import "./PaymentPayPal.css"
export default class PaymentPayPal extends Component {
    render() {
        return (
            <div className='container-fluid full-height wrapper-payment p-5'>
                <h5 className='title-paypal text-center '>REALIZA TU PAGO</h5>
                <div className='row full-height '>
                    <div className='col-12 p-5 '>
                        <div class="card justify-content-between p-5" >
                            <div class="d-flex justify-content-between card-paypal ">
                                <div className='col-6 p-2'>
                                    <img className='paypal-logo ' src='../img/PayPal-Logo.png'></img>
                                </div>
                                <div className='col-6'>
                                    <div class="card card-envio">
                                        <div class="card-body">
                                            <p> Tu pedido llegará aproximadamente a las: </p>
                                        </div>
                                    </div>
                                    <div className='p-4'>
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
