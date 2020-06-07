import React, { Component } from 'react'
//CSS
import "./ PhysiognomyResult.css"
export default class PhysiognomyResult extends Component {



    render() {
        return (
            <div className='container result-text'>
                <h1 className='text-center type-body'>TIPO DE FISIONOMIA</h1>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center' >
                        <div class="card w-75">
                            <div class="card-body">
                                <img className='img-fisio' src='../img/test-fisio.jpg'></img>
                                <h5 className='text-center type-physiognomy '> Ectomorto</h5>
                                <h3 class="text-justify text-fisionomia p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}