import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [inc, setInc] = useState(0);
  const [onlyCartProducts, setOnlyCartProduct] = useState([])

  const Allproducts = [
    {
      id: 1,
      title: "Crystal Bottol Green",
      discription: "The Coolest Therapiest",
      price: "$10",
      img: "/assets/images/boat1.jpg",
      amount: 1,
    },

    {
      id: 2,
      title: "Fairy Purple",
      discription: "Listen to your heart",
      price: "$20",
      img: "/assets/images/boat2.jpg",
      amount: 1,
    },

    {
      id: 3,
      title: "Mate Black HeadPhone",
      discription: "Enter into your own World",
      price: "$30",
      img: "/assets/images/boat3.jpg",
      amount: 1,
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
        }}
      >
        {children}
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);
