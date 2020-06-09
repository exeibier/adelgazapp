import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Components
import HamburguerMenu from '../HiddenMenu/HamburguerMenu'
//CSS 
import './Menu.css';


export default class Menu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='menu'>
                <nav className='menu-nav '>
                    <div className='menu-logo'><a href='/'><img src='../img/logo.jpeg' alt='logo'/></a></div>
                    <div className='menu-nav-items'>
                        <ul>
                            <li><a href='/'>Nosotros</a></li>
                            <li><a href='activity'>Perfil</a></li>
                            <li><a href='diets'>Dietas</a></li>
                            <li><a href='tienda'>Tienda</a></li>
                        </ul>
                    </div>
                    <div><HamburguerMenu click={this.props.toggleClickHandler}/></div>
                </nav>
            </div>
        )
    }
}