import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Flipkart() {
  const [list, setlist] = useState([]);
  useEffect(async () => {
    try {
      let products = await axios.get("http://localhost:3000/flip");
      setlist([...products.data]);
    } catch (error) {}
  }, []);

  return (
    <div className="container-fluid" id="flipkart">
      <div>
        <h2 style={{ textAlign: "center" }}>Flipkart Products</h2>
      </div>
      <div className="row ">
        {list.map((obj) => {
          return (
            <div className="col-lg-3" id="product-container">
              <div className="row">
                <div className="col">
                  <img src={obj.srcs} id="card-img-top" alt={obj.name} />
                </div>
                <div className="col" id="size">
                  <div>
                    <strong>{obj.name}</strong>
                  </div>
                  <div>
                    <span style={{ color: "white" }}> Price:</span>
                    <strong>Rs{obj.price}/-</strong>
                  </div>
                  <div>
                    <span style={{ color: "white" }}> Reviews:</span>
                    <strong>{obj.brand}</strong>
                  </div>
                  <div>
                    <span style={{ color: "white" }}> offers:</span>
                    <strong>{obj.offers}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Flipkart;