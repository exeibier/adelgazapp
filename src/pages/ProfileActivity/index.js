import React, { Component } from "react";
import { GetAllPlans } from "../../services/services";
import { Link } from "react-router-dom";
import "./ProfileActivity.css";
import CardActivity from "./CardActivity";
export default class ProfileActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlans: [],
    };
  }

  async componentDidMount() {
    let response = await GetAllPlans();
    let responseJSON = await response.json();
    if (responseJSON.success) {
      this.setState({
        allPlans: responseJSON.data.eatingPlan,
      });
    } else if (!responseJSON.success) {
      this.setState({
        success: false,
      });
    }
  }

  render() {
    const allPlans = this.state.allPlans;
    const renderPlans =
      allPlans && allPlans.length !== 0
        ? allPlans.map((item, index) => {
            return (
              <div className="d-flex justify-content between">
                <h2 className="data-plan p-5">
                  {`Plan Alimenticio ${index + 1}`}{" "}
                </h2>
                <Link
                  to={{
                    pathname: "/diets",
                    state: { idEatingPlan: item },
                  }}
                >
                  <div className="p-4 mt-3 ">
                    <button className="btn-view">VER</button>
                  </div>
                </Link>
              </div>
            );
          })
        : null;
    return (
      <div className=" activity container ">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 user-activity">
            <CardActivity />

            <div className="card-activity p-1">
              <div className="card-activity-user">
                <h2 className="title-account"> PLANES ALIMENTICIOS </h2>
                {renderPlans}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
