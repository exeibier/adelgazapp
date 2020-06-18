import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


import { GetEatingPlan } from "../../services/services";
import {
  Link
} from 'react-router-dom';

import "./Diets.css";
import CardDiets from "./CardDiets";
import Header from "../../components/Header";
export default class Diets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eatingPlans: [{ diets: [] }],
    };
  }


  async componentDidMount() {
    let response = await GetEatingPlan();
    const responseJSON = await response.json();
    const { eatingPlans } = responseJSON.data;
    if (responseJSON.success) {
      localStorage.setItem('idEatingPlan', eatingPlans[0]._id)
      this.setState({
        eatingPlans,
      });
    } else if (!responseJSON.success) {
      this.setState({});
    }
  }

  render() {
    const allDiets = this.state.eatingPlans[0];
    const { diets } = allDiets;

    const renderDiets =
      diets && diets.length !== 0
        ? diets.map((item, index) => {
            return (
              <div className="container">
                <div className="col-12 diets-card">
                  <h2>{`Día ${index + 1}`}</h2>
                  <div class="row">
                    <div class="col-12">
                      <CardDiets dishes={item} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null;


    return (
      <div className="diet-wrapper">
        <Header
          imgUrl={
            "https://percano.mx/blog-percano/wp-content/uploads/2019/09/dieta-mediterranea.jpg"
          }
          title={"PLAN ALIMENTICIO"}
        />
        <div className="container diet  mb-5 mt-5">
          <div className="row">{renderDiets}</div>
        </div>
        <div className="card-1-button">
          <Link to='/order'>
            Ve tu carrito
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    );
  }
}

