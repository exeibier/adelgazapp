import React from 'react';

//CSS
import './CardLogin.css'

function CardLogin({ email, contraseña }) {
    return (
        <div className='card user-login'>
        <h2 className='title-login'> INICIA SESIÓN </h2>
        <form >
            <div className='form-group'>
    <input className="input-email form-control" placeholder='Email' ></input>
            </div>
            <div className='form-group'>
    <input className="input-email form-control " placeholder='Contraseña' ></input>
            </div>
            <button className='btn-send my-3 btn-block'>ENVIAR</button>
        </form>

        <h5 className='text-verificacion' > No llego tu correo de verificación | Verificar registro</h5>
    </div>
    );
}
export default CardLogin;