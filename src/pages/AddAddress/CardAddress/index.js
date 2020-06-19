import React, { Component } from "react";

//Services
import { PostAddress } from "../../../services/services";

//CSS
import "./CardAddress.css";

export default class CardAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      cp: 0,
      numberExt: 0,
      numberInt: 0,
      colonia: "",
      city: "",
      reference: "",
      success: false,
    };
    this.handleInputAdress = this.handleInputAdress.bind(this);
    this.handleSubmitAdress = this.handleSubmitAdress.bind(this);
  }

  handleInputAdress({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmitAdress(event) {
    event.preventDefault();
    const {
      street,
      cp,
      numberExt,
      numberInt,
      colonia,
      city,
      reference,
    } = this.state;
    const data = {...this.state}
    console.log(data)
    let response = await PostAddress(data);
    let responseJSON = await response.json();
    console.log(responseJSON);
    if (responseJSON.success) {
      this.setState({
        success: true,
      });
    } else if (!responseJSON.success) {
      this.setState({
        success: false,
      });
    }
  }

  render() {
    const {
      street,
      cp,
      numberExt,
      numberInt,
      colonia,
      city,
      reference,
      success,
    } = this.state;
    if (success) {
      window.location.href = "/payment";
    }
    return (
      <div class="card form-address">
        <div>
          <div className="col-12">
            <div className="car">
              <img className="delivery " src="../img/transport.png"></img>
            </div>
            <form onSubmit={this.handleSubmitAdress} className="p-5">
              <div class="form-group">
                <input
                  class="form-control"
                  type={"text"}
                  value={street}
                  onChange={this.handleInputAdress}
                  name={"street"}
                  placeholder="Calle"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  value={cp}
                  onChange={this.handleInputAdress}
                  name={"cp"}
                  placeholder="C.P."
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  value={numberExt}
                  onChange={this.handleInputAdress}
                  name={"numberExt"}
                  placeholder="Num.exterior"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  value={numberInt}
                  onChange={this.handleInputAdress}
                  name={"numberInt"}
                  placeholder="Num.interior"
                  
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type={"text"}
                  value={colonia}
                  onChange={this.handleInputAdress}
                  name={"colonia"}
                  placeholder="Colonia"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type={"text"}
                  value={city}
                  onChange={this.handleInputAdress}
                  name={"city"}
                  placeholder="Ciudad"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type={"text"}
                  value={reference}
                  onChange={this.handleInputAdress}
                  name={"reference"}
                  placeholder="Referencia"
                  required
                />
              </div>
              <div className="btn-address-wrapper">
                <button className="delivery-btn my-3 btn-block" type="submit">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
