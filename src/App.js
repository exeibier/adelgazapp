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
import UserProfile from '../src/pages/UserProfile'
import ProfileActivity from '../src/pages/ProfileActivity'
import TestPhysiognomy from '../src/pages/TestPhysiognomy'
import MarketOrder from './pages/MarketOrder'
import AddAddress from '../src/pages/AddAddress';
import DateDelivery from '../src/pages/DateDelivery'
import PaymentPayPal from '../src/pages/ PaymentPayPal'
import Diets from '../src/pages/Diets'
import PhysiognomyResult from '../src/pages/ PhysiognomyResult'
import  TestPreferences from '../src/pages/ TestPreferences'
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
        <div className='App.css p-t-80'>
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
            <Route exact path='/userprofile'>
              <UserProfile/>
            </Route>
            <Route exact path='/activity'>
              <ProfileActivity/>
            </Route>
            <Route exact path='/test'>
              <TestPhysiognomy/>
            </Route>
            <Route exact path='/order'>
              <MarketOrder/>
            </Route>
            <Route exact path='/address'>
              <AddAddress/>
            </Route>
            <Route exact path='/delivery'>
              <DateDelivery/>
            </Route>
            <Route exact path='/payment'>
              <PaymentPayPal/>
            </Route>
            <Route exact path='/diets'>
              <Diets/>
            </Route>
            <Route exact path='/fisionomia'>
              <PhysiognomyResult/>
            </Route>
            <Route exact path='/preferences'>
              <TestPreferences/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
     
    );
  }
  
}

export default App;
