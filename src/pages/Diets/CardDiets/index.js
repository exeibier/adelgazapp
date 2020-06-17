import React, { Component } from "react";

//CSS
import "./CardDiets.css";

export default class CardDiets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dishes } = this.props;
    const { dishes: allDishes } = dishes;
    return (
      <div>
        <div class="table">
          <div className="row">
            <div className="border-0 col-6">
              <p>{allDishes[0].foodType}</p>
            </div>
            <div className="border-0 col-6">
              <p>{allDishes[0].foodName}</p>
            </div>
          </div>
          <div className="row">
            <div className="border-0 col-6">
              <img className="icon-food" src="../img/food.png"></img>
            </div>
            <div className="border-0 ingredient col-6">
              {allDishes[0].ingredients.map((item) => {
                return (
                  <>
                    <p>{item.name}</p>
                    <p>{`${item.grams} gr`}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div class="table">
          <div className="row">
            <div className="border-0 col-6">
              <p>{allDishes[1].foodType}</p>
            </div>
            <div className="border-0 col-6">
              <p>{allDishes[1].foodName}</p>
            </div>
          </div>
          <div className="row">
            <div className="border-0 col-6">
              <img className="icon-food" src="../img/food.png"></img>
            </div>
            <div className="border-0 ingredient col-6">
              {allDishes[1].ingredients.map((item) => {
                return (
                  <>
                    <p>{item.name}</p>
                    <p>{`${item.grams} gr`}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div class="table">
          <div className="row">
            <div className="border-0 col-6">
              <p>{allDishes[2].foodType}</p>
            </div>
            <div className="border-0 col-6">
              <p>{allDishes[2].foodName}</p>
            </div>
          </div>
          <div className="row">
            <div className="border-0 col-6">
              <img className="icon-food" src="../img/food.png"></img>
            </div>
            <div className="border-0 ingredient col-6">
              {allDishes[2].ingredients.map((item) => {
                return (
                  <>
                    <p>{item.name}</p>
                    <p>{`${item.grams} gr`}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
