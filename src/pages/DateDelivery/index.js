import React, { Component } from 'react'
//CSS
import "./DateDelivery.css"
export default class DateDelivery extends Component {
    render() {
        return (
            <div className='container-fluid full-height wrapper-delivery'>
                 <h5 className='title-delivery'>DETALLES DE COMPRA</h5>
                <div className='row full-height '>
                    <div className='col-12'>
                        <div class="card " >
                            <div class="card-body cards-delivery">
                                <div class="card w-75 ">
                                    <div class="card-body ">
                                        <h5 class="card-title">Dirección de envío</h5>
                                    </div>
                                </div>
                                <div class="card w-75 mt-4">
                                    <div class="card-body">
                                        <h5 class="card-title">Fecha</h5>
                                    </div>
                                </div>
                                <div class="card w-75 mt-4">
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
