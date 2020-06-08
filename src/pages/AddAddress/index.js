import React, { Component } from 'react'

import './AddAddress.css'
import CardAddress from './CardAddress'
export default class AddAddress extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container full-height mb-4 wrapper-delivery'>
            <div className='row full-height'>
                <div className='col-12'>
                    <p className='title '>DETALLES DE COMPRA</p>
                    <CardAddress
                    nombre={'nombre'}
                    apellido={'apellido'}
                    codigoPostal={'c.p'}
                    calle={'calles'}
                    numeroInt={'numeroInt'}
                    numeroExt={'numeroExt'}
                    calles={'calles'}
                    celular={'celular'}
                    />

                </div>
            </div>
        </div>

        )

    }
}
