import React, { useContext } from "react";
import { ApiContext } from "../ApiContext/ApiContext";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import "./ApiSwitcher.css";

const ApiSwitcher = () => {
  const { switchApi } = useContext(ApiContext);

  return (
    <Card>
      <CardHeader>
        <h1>Trocador de APIs</h1>
      </CardHeader>
      <div className='api-switcher'>
        <button onClick={switchApi}>API 1</button>
        <button onClick={switchApi}>API 2</button>
      </div>
    </Card>
  );
};

export default ApiSwitcher;
