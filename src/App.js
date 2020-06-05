import React, {Component} from 'react';
//External packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

//Global Bootsrap
import 'bootstrap/dist/css/bootstrap.css';

//Import components

import Menu from '../src/components/Menu';
import HiddenMenu from '../src/components/HiddenMenu';
import Drop from '../src/components/Drop'
import Footer from '../src/components/Footer'

//import pages
 import Home from '../src/pages/Home' 
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
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
        {/*   <HiddenMenu className='Hidden-menu' show={this.state.toggleOpen}/> */}
          {drop}
          <Switch>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/signup'>
              <Signup/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
     
    );
  }
  
}

export default App;
