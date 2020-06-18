import React, { Component } from "react";
//Components
import { SignUp } from "../../../services/services";

//CSS
import "./CardSignup.css";

export default class CardSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      lastName: "",
      password: "",
      success: false,
      flag: 1,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email, name, lastName, password } = this.state;
    const data = {
      email,
      name,
      lastName,
      password,
    };
    let response = await SignUp(data);
    let responseJSON = await response.json();
    if (responseJSON.success) {
      this.setState({
        success: true,
      });
    } else if (!responseJSON.success) {
      this.setState({
        success: false,
        flag: 2,
      });
    }
  }

  render() {
    const { email, name, lastName, password, success, flag } = this.state;
    if (success) {
      window.location.href = "/login";
    }
    return (
      <div class="card-wrapp ">
        <div className="card user-signup p-4">
          <h2 className="title-signup "> REGISTRO </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group ">
              <input
                className="input-email form-control "
                placeholder="Email"
                type={"email"}
                value={email}
                onChange={this.handleInput}
                name={"email"}
              />
            </div>
            <div className="form-group ">
              <input
                className="input-email form-control "
                placeholder="Nombre"
                type={"name"}
                value={name}
                onChange={this.handleInput}
                name={"name"}
              />
            </div>
            <div className="form-group ">
              <input
                className="input-email form-control "
                placeholder="Apellido"
                type={"lastName"}
                value={lastName}
                onChange={this.handleInput}
                name={"lastName"}
              />
            </div>
            <div className="form-group ">
              <input
                className="input-email form-control "
                placeholder="contraseña"
                type={"password"}
                value={password}
                onChange={this.handleInput}
                name={"password"}
              />
            </div>
            <button className="btn-send my-3 btn-block ">ENVIAR</button>
            {flag === 2 && (
              <p className="text-danger">
                El correo ya esta registrado por favor utiliza otro
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}
