import React from 'react';

//CSS
import './CardSignup.css'

function CardSignup({ email, nombre, apellido, contraseña }) {
    return (
        <div class="card-wrapp ">
            <div className='card user-signup p-4'>
                <h2 className='title-signup '> REGISTRO </h2>
                <form>
                    <div className='form-group '>
                        <input className="input-email form-control " placeholder="Email" ></input>
                    </div>
                    <div className='form-group '>
                        <input className="input-email form-control " placeholder="Nombre" ></input>
                    </div>
                    <div className='form-group '>
                        <input className="input-email form-control " placeholder="Apellido" ></input>
                    </div>
                    <div className='form-group '>
                        <input className="input-email form-control " placeholder="contraseña" ></input>
                    </div>
                    <button className='btn-send my-3 btn-block '>ENVIAR</button>
                </form>
                <h5 className='ml-2'> No llego tu correo de verificación | Verificar registro</h5>
            </div>
        </div>
    );
}
export default CardSignup;