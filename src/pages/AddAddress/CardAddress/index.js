import React from 'react';

//CSS
import './CardAddress.css'

function CardAddress({nombre,apellido,codigoPostal,calle,numeroInt,numeroExt,calles,celular }) {
    return (
        <div class="card">
        <div >
            <div className='col-12'>
                <div className='car'>
                <img className='delivery ' src='../img/transport.png'></img>
                </div>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Apellido"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="C.P"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Calle"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Num.interior"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Num.exterior"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entre que calles"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Télefono celular"></input>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                            Guardar como dirección predeterminada
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                            En caso de faltantes o sustitutos,deseo recibir una llamada de confirmación
                        </label>
                    </div>
                    <p className='mt-3'> Alguna instrucción adicional ?</p>
                    <div class="card">
                        <div class="card-body">
                           
                        </div>
                    </div>
                    <button className='delivery-btn my-3 btn-block'>ENVIAR</button>
                </form>

            </div>
        </div>
    </div>
       
    );
}
export default CardAddress;