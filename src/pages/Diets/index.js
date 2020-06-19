import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../components/Loader";

import { GetEatingPlan } from "../../services/services";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./Diets.css";
import CardDiets from "./CardDiets";
import Header from "../../components/Header";
class Diets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eatingPlan: [{ diets: [] }],
      loading: true,
    };
  }
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };

  async  componentDidMount() {
    this.wait(2000);
    let response = await GetEatingPlan(this.props.location.state.idEatingPlan);
    let responseJSON = await response.json()
    const { eatingPlan } = responseJSON.data;
    console.log(responseJSON);
    if (responseJSON.success) {
      this.setState({
        eatingPlan,
      });
    } else if (!responseJSON.success) {
      this.setState({});
    }
  }

  render() {
    const allDiets = this.state.eatingPlan;
    console.log(this.state)
    const { diets } = allDiets;
    if (this.state.loading) return <Loader />;
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
          <Link to={{
                    pathname: "/order",
                    state: { idEatingPlan: this.props.location.state.idEatingPlan},
                  }}>
            Ve tu carrito
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Diets);
