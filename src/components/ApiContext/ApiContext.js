import React, { useState } from "react";

export const ApiContext = React.createContext();

export const API_DATA_1 = "API_DATA_1";
export const API_DATA_2 = "API_DATA_2";

const ApiContextProvider = props => {
  const [apiData, setApiData] = useState(API_DATA_1);

  const switchApi = () => {
    setApiData(apiData === API_DATA_1 ? API_DATA_2 : API_DATA_1);
  };

  const value = { apiData, switchApi };

  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;
