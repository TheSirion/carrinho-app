import React from "react";
import "./Product.css";

const Item = ({ image, name, price, sellingPrice }) => {
  return (
    <div className='product'>
      <div className='product-img'>
        <img src={image} alt={name} />
      </div>
      <div className='info'>
        <h2>{name}</h2>
        <p className='price'>R$ {price}</p>
        <p className='sellingPrice'>R$ {sellingPrice}</p>
      </div>
    </div>
  );
};

export default Item;
