import React, { Component } from 'react'

import Header from '../../components/Header'
//CSS
import "./Diets.css"
export default class Diets extends Component {



    render() {
        return (
           <div>
               <Header
                imgUrl = {'https://www.heartfoundation.org.au/getmedia/606a0e4f-d923-43b1-9bfb-367239802de3/Heart_Foundation_dietary_advice_WEBSITE.png'}
                title = {'PLAN ALIMENTICIO'}
               />
                <div className='container diet  mb-5 mt-5'> 
                <div className='row'>
                    <div className='col-12 '>
                        <div class="row">
                            <div class="col-12 d-flex ">
                                
                                <table class="table P-5">
                                    <thead>
                                        <tr >
                                            <th className='border-0 ' scope="col">DESAYUNO</th>
                                            <th className='border-0 ingredient' scope="col">HOT CAKES VEGANOS DE PLÁTANO</th>
                                            <th className='border-0' scope="col">Gr</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border-0' scope="row"> <img className='icon-food' src='../img/food.png'></img></th>
                                            <td className='border-0 ingredient'>Plátano</td>
                                            <td className='border-0'>100 gr</td>
                                        </tr>
                                        <tr>
                                            <th className='border-0' scope="row"></th>
                                            <td className='border-0 ingredient'>   Plátano</td>
                                            <td className='border-0'>100 gr</td>
                                        </tr>
                                        <tr>
                                            <th className='border-0' scope="row"></th>
                                            <td className='border-0 ingredient'>Plátano</td>
                                            <td className='border-0'>100 gr</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div class="row table-center">
                            <div class="col-12 d-flex ">
                                <table class="table P-5">
                                    <thead>
                                        <tr >
                                            <th className='border-0 ' scope="col">DESAYUNO</th>
                                            <th className='border-0 ingredient' scope="col">HOT CAKES VEGANOS DE PLÁTANO</th>
                                            <th className='border-0' scope="col">Gr</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border-0' scope="row"> <img className='icon-food' src='../img/food.png'></img></th>
                                            <td className='border-0 ingredient'>Plátano</td>
                                            <td className='border-0'>100 gr</td>
                                        </tr>
                                        <tr>
                                            <th className='border-0' scope="row"></th>
                                            <td className='border-0 ingredient'>   Plátano</td>
                                            <td className='border-0'>100 gr</td>
                                        </tr>
                                        <tr>
                                            <th className='border-0' scope="row"></th>
                                            <td className='border-0 ingredient'>Plátano</td>
                                            <td className='border-0'>100 gr</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 d-flex ">
                                <table class="table P-5">
                                    <thead>
                                        <tr >
                                            <th className='border-0 ' scope="col">DESAYUNO</th>
                                            <th className='border-0 ingredient' scope="col">HOT CAKES VEGANOS DE PLÁTANO</th>
                                            <th className='border-0' scope="col">Gr</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border-0' scope="row"> <img className='icon-food' src='../img/food.png'></img></th>
                                            <td className='border-0 ingredient'>Plátano</td>
                                            <td className='border-0'>100 gr</td>
                                        </tr>
                                        <tr>
                                            <th className='border-0' scope="row"></th>
                                            <td className='border-0 ingredient'>   Plátano</td>
                                            <td className='border-0'>100 gr</td>
                                        </tr>
                                        <tr>
                                            <th className='border-0' scope="row"></th>
                                            <td className='border-0 ingredient'>Plátano</td>
                                            <td className='border-0'>100 gr</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>




                    </div>

                    
                </div>
                </div>
           </div> 
           

                )
        
            }
}