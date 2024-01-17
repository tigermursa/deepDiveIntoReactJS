import { useState } from "react";
import UseStateExc from "./pages/UseStateExc";

const App = () => {
  const [text, setText] = useState(" ");

  const sayHello = () => {
    setText("Hello0");
  };

  return (
    <div>
      <h1>{text}</h1>
      <UseStateExc text={sayHello} />
    </div>
  );
};

export default App;
