import React, { Component } from 'react'

import './Diets.css'
import CardDiets from './CardDiets'
import Header from '../../components/Header'
export default class Diets extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header
                    imgUrl={'https://percano.mx/blog-percano/wp-content/uploads/2019/09/dieta-mediterranea.jpg'}
                    title={'PLAN ALIMENTICIO'}
                />
                <div className='container diet  mb-5 mt-5'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div class="row">
                                <div class="col-12 d-flex ">
                                    <CardDiets
                                        typeFood={'DESAYUNO'}
                                        recipe={'Hotcakes de platano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                    />

                                </div>
                                <div class="col-12 d-flex table-center ">
                                    <CardDiets
                                        typeFood={'DESAYUNO'}
                                        recipe={'Hotcakes de platano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                    />

                                </div>
                                <div class="col-12 d-flex ">
                                    <CardDiets
                                        typeFood={'DESAYUNO'}
                                        recipe={'Hotcakes de platano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                        ingredient={'Plátano'}
                                        gramos={'100gr'}
                                    />

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
