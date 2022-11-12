import React from "react";
import "./Card.css";
import { useStateContext } from "../contexts/ContextProvider";

export default function Card() {
  const { inc, setInc, Allproducts, setOnlyCartProduct } = useStateContext();

  const onhandleClick = (item) => {
    setInc(inc + 1);
    setOnlyCartProduct((oldItems) => [...oldItems, item]);
    console.log("vidhi", item);
  };

  return Allproducts.map((item) => (
    <div className="maindiv">
      <div className="card1 card" style={{ width: " 18rem" }}>
        <img src={item.img} className="card-img1-top" alt="iteams" />
        <div className="card-body">
          <h5 className="card1-title">{item.title}</h5>
          <p className="card1-p">{item.discription}</p>
          <h5 className="card1-h5">{item.price}</h5>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => {
              onhandleClick(item);
            }}
          >
            AddToCart
          </a>
        </div>
      </div>
    </div>
  ));
}
