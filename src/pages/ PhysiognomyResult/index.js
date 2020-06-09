import React, { Component } from 'react'

import './ PhysiognomyResult.css'
import CardPhysiognomy from './CardPhysiognomy'

export default class  PhysiognomyResult extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container result-text'>
                <h1 className='text-center type-body'>TIPO DE FISIONOMIA</h1>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center' >
                        <CardPhysiognomy
                            typePhysiognomy={'Ectomorfo'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                        />

                    </div>
                </div>
            </div>

        )

    }
}