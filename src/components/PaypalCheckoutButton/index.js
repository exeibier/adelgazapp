import React from 'react';
import ReactDOM from 'react-dom';

import paypal from 'paypal-checkout';

const PayPalCheckoutButton = ({order}) => {
    const paypalConf = {
        currency: 'MXN',
        env: 'sandbox',
        client: {
            sandbox:'AWbu8lzpG5PCqzCAqx_hTl-nN-1otzqPRQ02w96QQZuWl_j8QP1oKG_wlsUVPyue_f-xXxqOekoKhkgY',
            production:'-- id--',
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'pill',
            color: 'blue'
        }
    }
    const PayPalButton = paypal.Button.driver('react', {React, ReactDOM});

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount:{
                        total: order.total,
                        currency: paypalConf.currency,
                    },
                    description: 'Compra en Fit U',
                    custom: order.customer || '',
                    item_list: {
                        items: order.items
                    }
                }
            ],
            note_to_payer:'Contáctanos para cualquier aclaración'
        };
        return actions.payment.create({payment})
    };
    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response => {
            console.log(response)
            alert(`El pago fue procesado correctamente, ID: ${response.id}`);
        })
        .catch (error => {
            console.log(error)
            alert ('Ocurrio un error al procesar el pago con PayPal')
        });
    };
    const onError = (error) => {
        console.log(error);
        alert('El pago no fue realizado, vuelva a intentarlo')
    };
    const onCancel = (data, actions) =>{
        alert('Pago no realizado, el usuario cancelo la transacción')
    };
    return (
        <PayPalButton
            env = {paypalConf.env}
            client = {paypalConf.client}
            payment = {(data, actions) => payment (data, actions)}
            onAuthorize = {(data, actions) => onAuthorize (data, actions)}
            onError = {(data, actions) => onError (data, actions)}
            onCancel =  {(data, actions) => onCancel (data, actions)}
            style = {paypalConf.style}
            commit
            locale='es_MX'
        />
    );
};



export default PayPalCheckoutButton;