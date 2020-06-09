import React from 'react';

//CSS
import './CardProfile.css'

function CardProfile({ nombre,contraseña,nuevaContraseña }) {
    return (
        <div class="card-profile">
            <div className='card-cuenta p-4' >
                <h2 className='title-user'>  CUENTA </h2>
                <form className=''>
                    <div className='form-group'>
                        <input className="input-g form-control" placeholder="Nombre" ></input>
                    </div>

                    <div className='form-group'>
                        <input className="input-g form-control" placeholder="Contraseña actual" ></input>
                    </div>
                    <div className='form-group'>
                        <input className="input-g form-control" placeholder="Nueva contraseña" ></input>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <h2 className='update-photo m-0'> Actualiza foto de perfil</h2>
                        <button className='btn-update'>SUBIR FOTO</button>
                    </div>

                </form>

            </div>
        </div>
    );
}
export default CardProfile;