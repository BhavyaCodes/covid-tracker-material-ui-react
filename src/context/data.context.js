import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({ hasLoaded: false });

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}
