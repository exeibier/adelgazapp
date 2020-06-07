import React, { Component } from 'react'
//CSS
import "./DateDelivery.css"
export default class DateDelivery extends Component {
    render() {
        return (
            <div className='container-fluid  p-5'>
                 <h5 className='title-delivery'>DETALLES DE COMPRA</h5>
                <div className='row  '>
                    <div className='col-12 p-5'>
                        <div class="card " >
                            <div class="card-body p-5">
                                <div class="card card-envio ">
                                    <div class="card-body ">
                                        <h5 class="card-title">Dirección de envío</h5>
                                    </div>
                                </div>
                                <div class="card card-envio  mt-4">
                                    <div class="card-body">
                                        <h5 class="card-title">Fecha</h5>
                                    </div>
                                </div>
                                <div class="card card-envio  mt-4">
                                    <div class="card-body">
                                        <h5 class="card-title">Hora</h5>
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
