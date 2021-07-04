import React, { useContext } from "react";
import Data1 from "../../apis/data.json";
import Data2 from "../../apis/data2.json";
import { ApiContext, API_DATA_1, API_DATA_2 } from "../ApiContext/ApiContext";
import Product from "../Product/Product";
import TotalPrice from "../TotalPrice/TotalPrice";
import "./ProductsList.css";

const ProductsList = () => {
  const { apiData } = useContext(ApiContext);

  const Data = () => {
    if (apiData === API_DATA_1) return Data1;
    if (apiData === API_DATA_2) return Data2;
  };

  const formatPrice = price => {
    const priceString = (price / 100).toFixed(2).toString();
    return priceString.replace(".", ",");
  };

  const sumPrices = products => {
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += product.sellingPrice;
    });
    return formatPrice(totalPrice);
  };

  return (
    <>
      <section className='products-list'>
        {Data().items.map(item => {
          return (
            <Product
              className='products-list-item'
              key={item.id}
              image={item.imageUrl}
              name={item.name}
              price={formatPrice(item.price)}
              sellingPrice={formatPrice(item.sellingPrice)}
            />
          );
        })}
      </section>
      <TotalPrice total={sumPrices(Data().items)} />
    </>
  );
};

export default ProductsList;
