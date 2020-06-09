import React from 'react';

//CSS
import './CardDelivery.css'

function CardDelivery({ address, dateDelivery, hourDelivery }) {
    return (
        <div class="card " >
            <div class="card-body p-4">
                <div class="card card-envio ">
                    <div class="card-body ">
                        <h5 class="card-title">{address}</h5>
                    </div>
                </div>
                <div class="card card-envio  mt-4">
                    <div class="card-body">
                        <h5 class="card-title">{dateDelivery}</h5>
                    </div>
                </div>
                <div class="card card-envio  mt-4">
                    <div class="card-body">
                        <h5 class="card-title">{hourDelivery}</h5>
                    </div>
                </div>

            </div>
        </div>


    );
}
export default CardDelivery;