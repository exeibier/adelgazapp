import React from 'react'

import './Loader.css'

function Loader (){
    return(
        <div className='loader'>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div className='text-loader'>
                <h2>CREANDO TU PLAN ALIMENTICIO</h2>
            </div>
        </div>
    )
}

export default Loader;