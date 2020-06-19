import React, {Component} from 'react';
//External packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//Global Bootsrap
import 'bootstrap/dist/css/bootstrap.css';


//import pages
import Shop from '../src/pages/Shop'
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
import PaymentPayPal from '../src/pages/ PaymentPayPal/'
import Diets from '../src/pages/Diets'
import PhysiognomyResult from '../src/pages/ PhysiognomyResult'
import TestPreferences from '../src/pages/ TestPreferences'
import CompletedPay from '../src/pages/CompletedPay'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggleOpen: false,
      isUserLogedIn: false
    }

    this.logOut = this.logOut.bind(this)
  }

  componentDidMount(){
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken){
      this.setState({
        isUserLogedIn: true
      })
    }
  }

  logOut(){
    localStorage.clear()
    this.setState({
      isUserLogedIn: false
    })
    this.toggleClickHandler()
    this.dropClickHandler()
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
    const { isUserLogedIn } = this.state
    let drop;
    if (this.state.toggleOpen) {
      drop = <Drop click={this.dropClickHandler}/>
    }
    return (
      <Router>
        <div className='App.css p-t-80'>
          <Menu 
          toggleClickHandler={this.toggleClickHandler}
          isUserLogedIn = {isUserLogedIn}
          logOut = {this.logOut}
          />
          <HiddenMenu 
          className='Hidden-menu' 
          show={this.state.toggleOpen}
          isUserLogedIn = {isUserLogedIn}
          logOut = {this.logOut}
          />
          {drop}
          <Switch>
          <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/tienda'>
              <Shop/>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/signup'>
              <Signup/>
            </Route>
            <Route exact path='/userprofile'>
              <UserProfile
                isUserLogedIn = {isUserLogedIn}
              />
            </Route>
            <Route exact path='/activity'>
              <ProfileActivity
                isUserLogedIn = {isUserLogedIn}
              />
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
            <Route exact path='/payCompleted'>
              <CompletedPay/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
     
    );
  }
  
}

export default App;