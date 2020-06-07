import React from'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
//CSS
import './Footer.css'

function Footer (){
    return(
        <footer className='footer py-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 col-md-s3 image d-flex align-items-center'>
                         <a href='/'><img src='../img/logo.jpeg'/></a>
                    </div>
                    <div className='col-9 col-md-6 contact d-flex flex-column justify-content-center'>
                        <div className='contact-p'>
                          <p>Contacto</p>
                        </div>
                        <div className='icons d-flex' >
                          <div className='content-contact d-flex justify-content-start'>
                           <FontAwesomeIcon icon={faPhone} className='icon'/>
                            <p> +55 31 313 121</p>
                          </div>
                          <div className='content-contact d-flex justify-content-start ml-3'>
                           <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                            <p>fitu@fitu.mx</p>
                          </div>
                        </div>
                    </div>
                    <div className='col- col-md-3 social d-flex align-items-center md-justify-content-end justify-content-center'>
                        <a href='#' className="md-ml-3"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href='#' className="ml-3"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;