import "./topProducts.css";
// import foto1 from "./fotos/foto1.jpg";
// import foto2 from "./fotos/foto2.jpg";
// import foto3 from "./fotos/foto3.jpg";

import { useState, useEffect } from "react";

// array dos items em venda TESTE

// const items = [
//   {
//     id: 1,
//     foto: foto1,
//     name: "testeste",
//     type: "shoe",
//     price: 123,
//   },

//   {
//     id: 2,
//     foto: foto2,
//     name: "testeste",
//     type: "shoe",
//     price: 123,
//   },

//   {
//     id: 3,
//     foto: foto3,
//     name: "testeste",
//     type: "shoe",
//     price: 123,
//   },
// ];

// fetch

function TopCard() {
  const [products, setProducts] = useState([]);
  const API = "https://foxcoding.net/api/getProductsList";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data.data.products);
        });

    };
    fetchData();
  }, []);

  return (
    <div className="topcard_container">
      <h1>TOP Products</h1>
    <div className="top_card">
     
      {products &&
        products.map((product, index) => {
          return (
            <div className="card_template">
              <div className="top_part">
                <img src={product.image} alt="" />
              </div>
              <div className="bot_part">
                <p>{product.brand}</p>
                <p>{product.name}</p>
                <h4>{product.price}€</h4>
              </div>
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default TopCard;
