import React from'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
//CSS
import './Footer.css'

function Footer (){
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 image'>
                        <div>
                         <a href='/'><img src='../img/logo.jpeg'/></a>
                        </div>
                    </div>
                    <div className='col-3 contact'>
                        <p>Contacto</p>
                        <FontAwesomeIcon icon={faPhone}/>
                        <p>+55 31 313 121</p>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>fitu@fitu.mx</p>

                    </div>
                    <div className='col-6 social'>
                        <a href='#'><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href='#'><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;