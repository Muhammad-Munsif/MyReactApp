import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-rose-500 text-2xl c">
      <h1>Hello world this is my first react app i am very glad to start react jss</h1>
      <h1>Hi this is another heading i added</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur minus neque dicta tempora harum necessitatibus quae provident. Cumque quisquam delectus veniam similique eius! Corrupti aperiam saepe corporis eaque esse, doloremque tempore quia delectus expedita rem eius qui praesentium reprehenderit!</p>
    </div>
  );
}

export default App;
