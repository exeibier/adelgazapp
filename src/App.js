import React, {Component} from 'react';
//External packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//Global Bootsrap
import 'bootstrap/dist/css/bootstrap.css';

//Import components

import Menu from '../src/components/Menu';
import HiddenMenu from '../src/components/HiddenMenu';
import Drop from '../src/components/Drop'
import Footer from '../src/components/Footer'

//import pages
import Home from '../src/pages/Home'
import Shop from '../src/pages/Shop'


import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggleOpen: false
    }
  }

  toggleClickHandler = () => {
    this.setState((prevState) =>{
      return {toggleOpen: !prevState.toggleOpen};
    });
  }

  dropClickHandler = () => {
    this.setState({toggleOpen: false})
  }

  render(){
    let drop;
    if (this.state.toggleOpen) {
      drop = <Drop click={this.dropClickHandler}/>
    }
    return (
      <Router>
        <div className='App.css'>
          <Menu toggleClickHandler={this.toggleClickHandler}/>
          <HiddenMenu className='Hidden-menu' show={this.state.toggleOpen}/>
          {drop}
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/tienda'>
              <Shop/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
     
    );
  }
  
}

export default App;
