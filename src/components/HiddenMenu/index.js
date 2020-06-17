import React from 'react';
import {Link} from 'react-router-dom';


//CSS
import './HiddenMenu.css'

const HiddenMenu = props => {
  let showClasses = 'hidden-menu'
  if (props.show){
    showClasses = 'hidden-menu open';
  }

  const {isUserLogedIn} = props 
   return(
    <nav className={showClasses}>
    <ul>
    {
                            !isUserLogedIn ? (
                             <li>
                                <Link to="/login">Iniciar sesión</Link>
                             </li>
                             ) : (
                                <li>
                                <Link to="/" onClick={props.logOut} >Cerrar sesión</Link>
                             </li>   
                             )
                        } 
                         {
                            !isUserLogedIn ? (
                             <li>
                                <Link to="/signup" className='btn-signup'>Crear cuenta</Link>
                             </li>
                             ) : (
                                <li>
                                <Link to="/activity" >Perfil</Link>
                             </li>   
                             )
                        } 
    </ul>
</nav>
   ) 
};

export default HiddenMenu;