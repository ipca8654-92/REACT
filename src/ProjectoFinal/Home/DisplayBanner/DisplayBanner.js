import "./DisplayBanner.css";
// import React, { useState } from "react";
// import foto1 from "./imgs/foto1.png";

// const items = [
//   {
//     id: 1,
//     foto: foto1,
//     name: "1",
//   },

//   {
//     id: 2,
//     foto: foto1,
//     name: "2",
//   },

//   {
//     id: 3,
//     foto: foto1,
//     name: "3",
//   },
// ];

function DisplayBanner() {
  // const [index, setIndex] = useState(0);
  // const length = 3;

  // const handlePrevious = () => {
  //   const newIndex = index - 1;
  //   setIndex(newIndex < 0 ? length - 1 : newIndex);
  // };

  // const handleNext = () => {
  //   const newIndex = index + 1;
  //   setIndex(newIndex >= length ? 0 : newIndex);
  // };

  return (
    <div className="display_banner">
      <div className="container">
        <div>
          <h1>Yohji Yamamoto Y-3</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default DisplayBanner;
