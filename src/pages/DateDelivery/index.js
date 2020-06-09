import React, { Component } from 'react'

import './DateDelivery.css'
import CardDelivery from './CardDelivery'
export default class DateDelivery extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container order p-5'>
                <h5 className='title-delivery'>DETALLES DE COMPRA</h5>
                <div className='row  '>
                    <div className='col-12 card-date '>
                        <CardDelivery
                        address={'Dirección de envío'}
                        dateDelivery={'Fecha'}
                        hourDelivery={'Hora'}
                        />
                    </div>
                </div>
            </div>


        )

    }
}
