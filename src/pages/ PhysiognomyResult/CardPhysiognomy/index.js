import React from 'react';


//CSS
import './CardPhysiognomy.css'

function CardPhysiognomy({ typePhysiognomy, description }) {
    return (
        <div class="card w-75">
            <div class="card-body ">
                <img className='img-fisio' src='../img/test-fisio.jpg'></img>
                <h5 className='text-center type-physiognomy '> {typePhysiognomy}</h5>
                <h3 class="text-justify text-fisionomia p-3">{description}</h3>
            </div>
        </div>
    );
}
export default CardPhysiognomy;