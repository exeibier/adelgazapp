import React, { Component } from 'react'

import './MarketOrder.css'
import CardOrder from './CardOrder'
export default class MarketOrder extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container order'>
                <div className='row'>
                    <div className='col-12 table' >
                        <h1 className='market-title'>CARRITO</h1>
                        <CardOrder
                        producto={'../img/fresa.jpeg'}
                        precio={'$56.95'}
                        cantidad={'550gr'}
                        total={'$56.95'}
                        />
                    </div>

                </div>

            </div>

        )

    }
}
