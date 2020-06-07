import React, { Component } from 'react'
//CSS
import "./PaymentPayPal.css"
export default class PaymentPayPal extends Component {
    render() {
        return (
            <div className='container-fluid  wrapper-payment p-5'>
                <h5 className='title-paypal text-center '>REALIZA TU PAGO</h5>
                <div className='row '>
                    <div className='col-12  '>
                        <div class="card justify-content-between p-2" >
                            <div class="d-flex justify-content-between card-paypal ">
                                <div className='col-6 '>
                                    <img className='paypal-logo ' src='../img/PayPal-Logo.png'></img>
                                </div>
                                <div className='col-6'>
                                    <div class="card card-envio">
                                        <div class="card-body">
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
