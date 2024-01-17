import React, { useState } from "react";

const UseStateExc = (props) => {
  const [counter, setCounter] = useState(0);
  const [stringTest, setStringTest] = useState("hello");
const x = text;
console.log(x)
  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const handleStringChange = () => {
    setTimeout(() => {
        setStringTest((prevString) => (prevString === "hello" ? "hi" : "hello"));
    }, 1000);
    
  };

  return (
    <div>
      <h2>{counter}</h2>
     
      <button onClick={handleCounter}>Click if you can</button>
      <h1>{stringTest}</h1>
      <button onClick={handleStringChange}>Click if you can</button>
    </div>
  );
};

export default UseStateExc;
