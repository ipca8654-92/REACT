import "./Shop.css";
import { useState, useEffect } from "react";

function Shop() {
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

export default Shop;
