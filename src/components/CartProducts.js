import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import "./CardProducts.css";

const CartProducts = ({ show }) => {
  const { onlyCartProducts, setOnlyCartProduct, itemAmount, setItemAmount } =
    useStateContext();
  console.log("from new cmp ---> ", onlyCartProducts);

  const Increasing = () => {
    setItemAmount(itemAmount + 1);

    // const incrise=onlyCartProducts.filter((eleitem)=>eleitem.id === el.id ? eleitem.itemAmount += value : eleitem);
    //  setItemAmount(incrise);
  };

  const Decreasing = () => {
    console.log("desc --> ", itemAmount);
    if (itemAmount > 0 && itemAmount !== 0) {
      setItemAmount(itemAmount - 1);
    } else {
      setItemAmount(itemAmount);
    }
  };

  const onDelete = (el) => {
    console.log("removedata el ", el.id);
    const removeitem = onlyCartProducts.filter(
      (Allproduct) => Allproduct.id !== el.id
    );

    setOnlyCartProduct(removeitem);
  };

  const OnClearcart = () => {
    setOnlyCartProduct([]);
  };
  return (
    <div className={`container  ${show ? "show" : "hide"} `}>
      {onlyCartProducts.length === 0 && (
        <div className="emptycart"
          style={{
            color: "blue",
            fontSize: "20px",
            textShadow: "1px 1px skyblue",
            backgroundColor: "beige",
            width: "60%",
            textAlign: "center",
            height: "15%",
            boxShadow: "0px 12px 12px 1px gray",
            margin: "auto",
            fontFamily: "serif",
            fontStyle: "italic",
            borderRadius: "11px",
            padding:"15px",
           
            
          }}
        >
          Cart is Empty !!
          <br />
          {/* <span style={{size:"10px"}}>&#128127;  Fatafat Item Add Karo Yaaar..</span> */}
        </div>
      )}

      {onlyCartProducts.map((el) => {
        return (
          <div className="list-group">
            <div>
              <a
                href="#"
                className="list-group-item list-group-item-action active listiteam"
                aria-current="true"
              >
                <div>
                  <img src={el.img} className="listimg" />
                </div>

                <div className="contentsetting">
                  <p className="mb-1">{el.title}</p>
                  <small>{el.discription}</small>
                  <br />
                  <small>{el.price}</small>
                </div>

                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-info"
                    onClick={() => Increasing(el)}
                  >
                    +
                  </button>

                  <button type="button" class="btn btn-success">
                    {itemAmount}
                  </button>

                  <button
                    type="button"
                    disabled={itemAmount === 1}
                    class="btn btn-sm btn-info"
                    onClick={() => Decreasing()}
                  >
                    -
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    onClick={() => onDelete(el)}
                  >
                    Delete
                  </button>
                </div>
              </a>
            </div>
          </div>
        );
      })}

      <div className="clearcart">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => OnClearcart()}
          hidden={onlyCartProducts.length === 0}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
