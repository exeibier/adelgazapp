import React, { Component } from 'react'

import './TestPhysiognomy.css'
import CardTest from './CardTest'
export default class TestPhysiognomy extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className=' user container' >
                <div className='container test-wrapper '>
                    <div className="row">
                        <div className="col-12">
                            <h1 className='text-center welcome my-3 mt-5 '> ¡BIENVENIDO!</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="wrapper-image w-100 h-100 border rounded-lg d-none d-md-block"></div>
                        </div>
                        <div className="col-12 col-md-6">
                        <CardTest
                        edad={'edad'}
                        sexo={'sexo'}
                        diametroMuñeca={'diametro'}
                        altura={'altura'}
                        peso={'peso'}
                        actividadFisica={'actividad'}
                        porcentajeGrasa={'grasa'}
                        objetivo={'objetivo'}
                        />
                        </div>
                    </div>
                </div>
            </div>
                )
        
            }
}