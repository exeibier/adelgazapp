import React, { Component } from "react";

import { GetAddress } from "../../services/services";
//Component
import PayPalCheckoutButton from "../../components/PaypalCheckoutButton";
//CSS
import "./PaymentPayPal.css";
export default class PaymentPayPal extends Component {
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
    };
  }

  async componentDidMount() {
    let response = await GetAddress();
    let responseJSON = await response.json();
    console.log(responseJSON);
    let { direction } = responseJSON.data;
    let {
      street,
      cp,
      numberExt,
      numberInt,
      colonia,
      city,
      reference,
    } = direction;
    if (responseJSON.success) {
      this.setState({
        street: street,
        cp: cp,
        numberExt: numberExt,
        numberInt: numberInt,
        colonia: colonia,
        city: city,
        reference: reference,
      });
    } else if (!responseJSON.success) {
      this.setState({});
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
    } = this.state;
    const order = {
      customer: "Xabier",
      total: localStorage.getItem("totalCart"),
      items: [],
    };
    return (
      <div className="container  wrapper-payment p-3">
        <h5 className="title-paypal text-center ">REALIZA TU PAGO</h5>
        <div className="row ">
          <div className="col-12 card-top ">
            <div class="card card-mobile justify-content-between p-5">
              <div class="row card-paypal ">
                <div className="col-12 col-md-6 ">
                  <img
                    className="paypal-logo "
                    src="../img/PayPal-Logo.png"
                  ></img>
                </div>
                <div className="col-12 col-md-6">
                  <div class="card card-envio">
                    <div class="card-body order-shop">
                      <p> Tu pedido llegará a la siguiente dirección: </p>
                      <ul>
                        <li>Calle: {street}</li>
                        <li>C.P.: {cp}</li>
                        <li>NumExt: {numberExt}</li>
                        {numberInt ? <li>NumInt: {numberInt}</li> : null}
                        <li>Colonia: {colonia}</li>
                        <li>Ciudad: {city}</li>
                        <li>Referencias: {reference}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="btn-payment">
                    <PayPalCheckoutButton order={order} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
