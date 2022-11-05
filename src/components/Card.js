import React from "react";
import "./Card.css";
import { useStateContext } from "../contexts/ContextProvider";
import Header from "./Header";
import { useState } from "react";

export default function Card() {
  const { inc, setInc, Allproducts, setOnlyCartProduct } = useStateContext();
  

  const funforgetdata = () => {
   
    setOnlyCartProduct(Allproducts);
   
  };
  const onhandleClick = () => {
    setInc(inc + 1);
    console.log("vidhi", Allproducts);
  };

  return (
    <div className="maindiv">
      <div className="card1 card" style={{ width: " 18rem" }}>
        <img
          src="/assets/images/boat1.jpg"
          className="card-img1-top"
          alt="iteams"
        />
        <div className="card-body">
          <h5 className="card1-title">Crystal Bottol Green</h5>
          <p className="card1-p">The Coolest Therapiest</p>
          <h5 className="card1-h5">$10</h5>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => {
              onhandleClick();
              funforgetdata();
            }}
            
          >
            AddToCart
            
          </a>
         
        </div>
      </div>

      <div className="card2 card" style={{ width: " 18rem" }}>
        <img
          src="/assets/images/boat2.jpg"
          className="card-img2-top"
          alt="iteams"
        />
        <div className="card-body">
          <h5 className="card2-title">Fairy Purple </h5>
          <p className="card2-p">Listen to your heart </p>
          <h5 className="card2-h5">$20</h5>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => onhandleClick()}
          >
            AddToCart
          </a>
        </div>
      </div>

      <div className="card3 card" style={{ width: " 18rem" }}>
        <img
          src="/assets/images/boat3.jpg"
          className="card-img3-top"
          alt="iteams"
        />
        <div className="card-body">
          <h5 className="card3-title">Mate Black HeadPhone</h5>
          <p className="card3-p">Enter into your own World</p>
          <h5 className="card3-h5">$30</h5>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => onhandleClick()}
          >
            AddToCart
          </a>
        </div>
      </div>

      
    </div>
  );
}
