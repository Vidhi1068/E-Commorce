import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Card from "./Card";

const CartProducts = ({ show }) => {
  const { onlyCartProducts } = useStateContext();
  console.log("from new cmp ---> ", onlyCartProducts);
  return (
    <div className={`container  ${show ? "show" : "hide"} `}>
      {onlyCartProducts}
    </div>
  );
};

export default CartProducts;
