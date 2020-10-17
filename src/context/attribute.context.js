import React, { createContext, useReducer } from "react";
import attributeReducer from "../reducers/attribute.reducer";

export const AttributeContext = createContext();
export const DispatchAttributeContext = createContext();

export function AttributeProvider(props) {
  const [attribute, dispatch] = useReducer(attributeReducer, "confirmed");

  return (
    <AttributeContext.Provider value={attribute}>
      <DispatchAttributeContext.Provider value={dispatch}>
        {props.children}
      </DispatchAttributeContext.Provider>
    </AttributeContext.Provider>
  );
}
