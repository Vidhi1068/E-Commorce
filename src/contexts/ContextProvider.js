import React, { createContext, useContext, useState } from "react";
import CartProducts from "../components/CartProducts";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [inc, setInc] = useState(0);
  const [itemAmount, setItemAmount] = useState(1);
  const [onlyCartProducts, setOnlyCartProduct] = useState([])
 

  const Allproducts = [
    {
      id: 1,
      title: "Crystal Bottol Green",
      discription: "The Coolest Therapiest",
      price: "$10",
      img: "/assets/images/boat1.jpg",
     
    },

    {
      id: 2,
      title: "Fairy Purple",
      discription: "Listen to your heart",
      price: "$20",
      img: "/assets/images/boat2.jpg",
      
    },

    {
      id: 3,
      title: "Mate Black HeadPhone",
      discription: "Enter into your own World",
      price: "$30",
      img: "/assets/images/boat3.jpg",
      
    },

  ];

   

  return (
    <>
      <StateContext.Provider
        value={{
          Allproducts,
          inc,
          setInc,
          onlyCartProducts,
          setOnlyCartProduct,
          itemAmount,
          setItemAmount,
        }}
      >
        {children}

        <CartProducts id={Allproducts.id} />
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);
