import React, { Component } from 'react'

import './ TestPreferences.css'
import CardPreferences from './CardPreferences'

export default class TestPreferences extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container wrapper-preferences'>
            <div className='row'>
                <div className='col-12 '>
                    <h1 className='text-plan'>ELIJA SU TIPO DE PLAN ALIMENTICIO</h1>
                    <CardPreferences
                    typePlan={'Dieta volumen'}
                    descriptionPlan={'Lleva condsigo un cambio considerable de las cantidades en carbohidratos, proteínas y grasas, en función de la cantidad de masa muscular que se quiera ganar.'}
                    />
                     <CardPreferences
                    typePlan={'Dieta tonificación'}
                    descriptionPlan={'Se trata de un plan equilibrado, en el que no se abusa de ningún alimento,es una ayuda necesaria para combatir la flacidez.'}
                    />
                     <CardPreferences
                    typePlan={'Dieta para adelgazar'}
                    descriptionPlan={'Este plan aumenta el consumo de los alimentos antioxidantes (frutas, verduras, infusiones o especias) y disminuiye o elimina los alimentos perjudiciales, existentes en hidratos refinados y grasas malas.'}
                    />


                </div>
            </div>

        </div>

        

        )

    }
}