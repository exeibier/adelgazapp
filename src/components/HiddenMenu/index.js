import React from 'react';

//CSS
import './HiddenMenu.css'

const HiddenMenu = props => {
  let showClasses = 'hidden-menu'
  if (props.show){
    showClasses = 'hidden-menu open';
  }
   return(
    <nav className={showClasses}>
    <ul>
      <li><a href='/'>Nosotros</a></li>
      <li><a href='perfil'>Perfil</a></li>
      <li><a href='planes'>Dietas</a></li>
      <li><a href='tienda'>Tienda</a></li>
    </ul>
</nav>
   ) 
};

export default HiddenMenu;