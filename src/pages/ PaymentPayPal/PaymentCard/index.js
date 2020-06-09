import React from 'react';

//CSS
import './PaymentCard.css'

function PaymentCard({ deliveryTime }) {
    return (
        <div className='card card-mobile p-5'>
            <div className='row'>
                <div className='col-12 col-md-6 card-center'>
                    <img className='paypal-logo' src='../img/PayPal-Logo.png'></img>
                    <div className='card card-hour'>
                        <div className='order-shop'>
                            <p>{deliveryTime}</p>
                        </div>
                    </div>
                    <div className='p2'>
                        <button className='btn-payment btn-block'>ENVIAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PaymentCard;