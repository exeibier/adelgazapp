import React from 'react';

//CSS
import './CardOrder.css'

function CardOrder({producto,precio,cantidad,total,totalPedido }) {
    return (
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
                            <td>{precio}</td>
                            <td>{cantidad}</td>
                             <td>{total}</td>
                        </tr>
                        <tr>
                        <td scope="row"> <img className='img-order' src='../img/fresa.jpeg'></img></td>
                            <td>{precio}</td>
                            <td>{cantidad}</td>
                             <td>{total}</td>
                        </tr>
                        <tr>
                        <td scope="row"> <img className='img-order' src='../img/fresa.jpeg'></img></td>
                            <td>{precio}</td>
                            <td>{cantidad}</td>
                             <td>{total}</td>
                        </tr>
                        <tr>
                        <td scope="row"> <img className='img-order' src='../img/fresa.jpeg'></img></td>
                            <td>{precio}</td>
                            <td>{cantidad}</td>
                             <td>{total}</td>
                        </tr>

                        <tr >
                            <td className='border-0'></td>
                            <td className='border-0'></td>
                            <td className='border-0'> {totalPedido}Total del pedido $227.8</td>
                            <td className='border-0'> <button className='btn-order  payment btn-secondary'>ENVIAR</button></td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default CardOrder;