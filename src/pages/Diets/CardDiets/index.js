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
            <div className="col-4">
              <h3>{allDishes[0].foodType}</h3>
            </div>
            <div className="col-4">
              <h3>Platillo</h3>
            </div>
            <div className="col-4">
              <h3>Ingredientes</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img className="icon-food" src="../img/food.png"></img>
            </div>
            <div className="col-4">
              <p>{allDishes[0].foodName}</p>
            </div>
            <div className="ingredient col-4">
              {allDishes[0].ingredients.map((item) => {
                return (
                  <>
                    <p>
                      {item.name} {`${item.grams} gr`}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div class="table">
          <div className="row">
            <div className="col-4">
              <h3>{allDishes[1].foodType}</h3>
            </div>
            <div className="col-4">
              <h3>Platillo</h3>
            </div>
            <div className="col-4">
              <h3>Ingredientes</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img className="icon-food" src="../img/food.png"></img>
            </div>
            <div className="col-4">
              <p>{allDishes[1].foodName}</p>
            </div>
            <div className="ingredient col-4">
              {allDishes[1].ingredients.map((item) => {
                return (
                  <>
                    <p>
                      {item.name} {`${item.grams} gr`}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div class="table">
          <div className="row">
            <div className="col-4">
              <h3>{allDishes[2].foodType}</h3>
            </div>
            <div className="col-4">
              <h3>Platillo</h3>
            </div>
            <div className="col-4">
              <h3>Ingredientes</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img className="icon-food" src="../img/food.png"></img>
            </div>
            <div className="col-4">
              <p>{allDishes[2].foodName}</p>
            </div>
            <div className="ingredient col-4">
              {allDishes[2].ingredients.map((item) => {
                return (
                  <>
                    <p>
                      {item.name} {`${item.grams} gr`}
                    </p>
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
