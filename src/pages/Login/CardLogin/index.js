import React, {Component} from 'react';

//CSS
import './CardLogin.css'
//Services
import {LogIn as LogInService} from '../../../services/services'

export default class CardLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      success: false,
      flag: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
 
  handleInput({ target: { name, value } }){
    this.setState({
      [name]:value
    })
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    let response = await LogInService(data);
    let responseJSON = await response.json();
    if (responseJSON.success) {
      localStorage.setItem("authTokenUser", responseJSON.data.token);
      this.setState({
        success: true,
      });
    } else if (!responseJSON.success) {
      this.setState({
        success: false,
        flag: 2
      });
    }
  }
  render() {
    const {email, password, success, flag} = this.state
    if (success) {
      window.location.href = "/";
    }
    return (
      <div className='card user-login'>
      <h2 className='title-login'> INICIA SESIÓN </h2>
      <form onSubmit={this.handleSubmit} >
          <div className='form-group'>
              <input className="input-email form-control"
               type={'email'}
               value={email}
               onChange={this.handleInput}
               name={'email'}
               placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input className="input-email form-control" 
            placeholder='Contraseña'
            type={'password'}
            value={password}
            onChange={this.handleInput}
            name={'password'}
            />
          </div>  
          <button className='btn-send my-3 btn-block' type='submit'>ENVIAR</button>
      </form>
      { flag === 2 && <p className='text-danger'>El correo o contraseña son incorrectos, porfavor verificalos</p>}

    </div>
  );
}
  }
   
