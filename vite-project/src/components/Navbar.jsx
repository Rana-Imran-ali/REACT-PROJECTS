import React, { useState } from "react";
import Home from "../Home";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  let changeColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <div className="  " style={{ backgroundColor: color }}>
      <h1>{count}</h1>
      <button
        className="border-2 border-gray-900  h-8 px-2 rounded-full hover:bg-gray-300"
        onClick={() => {
          setCount(count + 1);
          setColor(changeColor());
        }}
      >
        Increase
      </button>
      <Home />
    </div>
  );
};

export default Navbar;
