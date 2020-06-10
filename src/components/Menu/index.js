import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Components
import HamburguerMenu from '../HiddenMenu/HamburguerMenu'
//CSS 
import './Menu.css';


export default class Menu extends Component {
    constructor(props){
        super(props)
        this.logOut = this.logOut.bind(this)
    }

    logOut(){
      this.props.logOut()
    }

    render(){
        const { isUserLogedIn } = this.props
        return(
            <div className='menu'>
                <nav className='menu-nav '>
                    <div className='menu-logo'><a href='/'><img src='../img/logo.jpeg' alt='logo'/></a></div>
                    <div className='menu-nav-items'>
                        <ul>
                        {
                            !isUserLogedIn ? (
                             <li>
                                <Link to="/signup">Crear cuenta</Link>
                             </li>
                             ) : (
                                <li>
                                <Link to="/activity">Perfil</Link>
                             </li>   
                             )
                        } 
                         {
                            !isUserLogedIn ? (
                             <li>
                                <Link to="/login">Iniciar sesión</Link>
                             </li>
                             ) : (
                                <li>
                                <Link to="/" onClick={this.props.logOut}>Cerrar sesión</Link>
                             </li>   
                             )
                        }   
                        </ul>
                    </div>
                    <div><HamburguerMenu click={this.props.toggleClickHandler}/></div>
                </nav>
            </div>
        )
    }
}