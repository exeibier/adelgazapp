import React, { Component } from 'react'
//CSS
import "./PaymentPayPal.css"
export default class PaymentPayPal extends Component {
    render() {
        return (
            <div className='container-fluid full-height wrapper-payment'>
                <h5 className='title-paypal '>REALIZA TU PAGO</h5>
                <div className='row full-height '>
                    <div className='col-12 '>
                        <div class="card justify-content-between " >
                            <div class="d-flex justify-content-between card-paypal ">
                                <div className='col-6'>
                                    <img className='paypal-logo' src='../img/PayPal-Logo.png'></img>
                                </div>
                                <div className='col-6'>
                                    <div class="card w-75 mt-5 card-envio">
                                        <div class="card-body">
                                            <p> Tu pedido llegará aproximadamente a las: </p>
                                        </div>
                                    </div>
                                    <button className='btn-payment my-3 btn-block'>ENVIAR</button>
                                </div>
                               


                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )

    }
}
