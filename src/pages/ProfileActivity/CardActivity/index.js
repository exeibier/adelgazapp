import React from 'react';

//CSS
import './CardActivity.css'

function CardActivity({ nombre,email }) {
    return (
        <div class="card-activity p-1">
            <div className='card-activity-user'>
                <h2 className='title-account'>  CUENTA </h2>
                <div className='d-flex'>
                    <h2 className='data-account p-5'> Nombre</h2>
                    <div className='p-4 mt-3'>
                        <input className="input-current form-control " placeholder="Angelica Gallegos" ></input>
                    </div>
                </div>
                <div className='d-flex '>
                    <h2 className='data-account p-5 '>Email</h2>
                    <div className='p-4 mt-3'>
                        <input className="input-current form-control" placeholder="example@gmail.com" ></input>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center p-3'>
                    <button className='btn-change '>CAMBIAR DATOS</button>
                </div>

            </div>
        </div>

    );
}
export default CardActivity;








