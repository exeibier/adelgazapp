import React, { Component } from 'react'
//CSS
import "./MarketOrder.css"
export default class MarketOrder extends Component {
    render() {
        return (
            <div className='container order'>
                <div className='row'>
                    <div className='col-12 table' >
                        <h1 className='market-title'>CARRITO</h1>
                        <div class="card">
                            <div class="wrapper-order ">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row"> <img className='img-order' src='../img/fresa.jpeg'></img></td>
                                            <td>$56.95</td>
                                            <td>550 gr</td>
                                            <td>$56.95</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><img className='img-order' src='../img/fresa.jpeg'></img></td>
                                            <td>$56.95</td>
                                            <td>550gr</td>
                                            <td>$56.95</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><img className='img-order' src='../img/fresa.jpeg'></img></td>
                                            <td>$56.95</td>
                                            <td>550 gr</td>
                                            <td>$56.95</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><img className='img-order' src='../img/fresa.jpeg'></img></td>
                                            <td>$56.95</td>
                                            <td>550 gr</td>
                                            <td>$56.95</td>
                                        </tr>

                                        <tr >
                                            <td className='border-0'></td>
                                            <td className='border-0'></td>
                                             <td className='border-0'> Total del pedido $227.8</td>
                                             <td className='border-0'> <button className='btn-send payment btn-secondary'>ENVIAR</button></td>
                            
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )

    }
}
