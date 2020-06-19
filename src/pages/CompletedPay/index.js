import React from "react";
import { Link } from "react-router-dom";

import './CompletedPay.css'
function CompletedPay() {
  return (
    <div className="completed-pay">
      <div>
        <h2>GRACIAS POR TU COMPRA</h2>
      </div>
      <div className="btn-completed-pay">
        <Link to="/">Volver a Home</Link>
      </div>
    </div>
  );
}

export default CompletedPay;
