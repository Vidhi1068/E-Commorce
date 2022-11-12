import React from "react";
import "./Header.css";
import Cart from "../components/Cart";
import { useState } from "react";
import CartProducts from "./CartProducts";


export default function Header() {
  const [show, setShow] = useState(false);

  const click = () => {
    setShow(show === true ? false : true);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-dark navstyle">
        <div className="container-fluid purple">
          <a className="navbar-brand" href="#">
            BoAt HeadPhones
          </a>
          <Cart handleClick={() => click()} />
        </div>
      </nav>
   
      <CartProducts show={show} />

     
    </div>
  );
}
