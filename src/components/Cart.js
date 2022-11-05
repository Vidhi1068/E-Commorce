import React, { useState } from "react";
import "./Cart.css";
import { useStateContext} from "../contexts/ContextProvider";


export default function Cart({handleClick}) {

  //import state variable from contexts
  const { inc} = useStateContext();

  return (
    <div onClick={() => handleClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      <div className="batton">{inc}</div>
      
      {/* <div className="cart_item1">
        <div className="cart_img">
          <img
            src="/assets/images/boat1.jpg"
            className="card-img1-top"
            alt="iteams"
          />
        </div>

        <div className="cart_data1">
          <h5 className="card-title">Crystal Bottol Green</h5>
          <p>The Coolest Therapiest</p>
          <h5>$10</h5>
        </div>
      </div>
      <hr />

      <div className="cart_item2">
        <div className="cart_img">
          <img
            src="/assets/images/boat2.jpg"
            className="card-img1-top"
            alt="iteams"
          />
        </div>

        <div className="cart_data2">
          <h5 className="card-title">Fairy Purple </h5>
          <p>Listen to your heart</p>
          <h5>$20</h5>
        </div>
      </div>
      <hr />
      <div className="cart_item3">
        <div className="cart_img">
          <img
            src="/assets/images/boat3.jpg"
            className="card-img1-top"
            alt="iteams"
          />
        </div>

        <div className="cart_data3">
          <h5 className="card-title">Mate Black HeadPhone</h5>
          <p>Enter into your own World</p>
          <h5>$30</h5>
        </div> 
        <hr/>
      </div> */}
    </div>
  );
}
