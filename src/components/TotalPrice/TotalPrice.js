import React from "react";
import "./TotalPrice.css";

const TotalPrice = ({ total }) => {
  return (
    <section className='total-price'>
      <h1>Total</h1>
      <h1>R${total}</h1>
      {parseFloat(total) > 10 ? (
        <p className='success-pill'>Parabéns, sua compra tem frete grátis !</p>
      ) : null}
    </section>
  );
};

export default TotalPrice;
