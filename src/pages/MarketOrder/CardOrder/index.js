import React, { Component } from "react";

//Services
import { GetShoppingCart } from "../../../services/services";

//CSS
import "./CardOrder.css";
import {
  Link
} from 'react-router-dom';
export default class CardOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total:localStorage.getItem('totalCart')
      
  
    };
  }

  async componentDidMount() {
    let response = await GetShoppingCart();
    const responseJSON = await response.json();
    console.log(responseJSON);
    if (responseJSON.success) {
      const total = responseJSON.data.reduce((prev, curr)=>{
        console.log(prev, curr)
        return curr.price + prev
      },0)
      let totalFixed = total.toFixed(2)
      totalFixed = parseFloat(totalFixed)
      localStorage.setItem('totalCart', totalFixed)
      this.setState({
        data: responseJSON.data,
      });
    } else if (!responseJSON.success) {
      this.setState({});
    }
  }

  render() {
    const {total} = this.state
    const allIngridients = this.state.data;
    console.log(allIngridients);
    const shoppingCart = allIngridients.map((item, index) => {
      return (
        <>
          <tr key={index}>
            <td scope="row">
              <img className="img-order" src={item.image}></img>
            </td>
            <td className="border-0 align-middle">{item.name}</td>
            <td className="border-0 align-middle text-center">{item.grams}</td>
            <td className="border-0 align-middle text-center">${item.price % 1 !=0 ? item.price :`${item.price}.00`}</td>
          </tr>
        </>
      );
    });

    return (
      <div>
        <div class="wrapper-order ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col" className='text-center'>Porción</th>
                <th scope="col" className='text-center'>Total</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart}
              <tr className='text-right'>
                <td colSpan='4'>Total: ${total.substring(0, total.indexOf('.')+3)}</td>
              </tr>
            
            </tbody>
          </table>
        </div>
        <div className='d-flex justify-content-end'>
          <Link to={'/address'} className="btn-order  payment btn-secondary mt-3 py-1 px-3">CONTINUAR</Link>
        </div>
      </div>
    );
  }
}
