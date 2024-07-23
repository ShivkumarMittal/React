import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username:"shiv",
    age : 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwing test</h1>
      <Card username="shiv" btnText="click me"/>
      <Card username="karan"/>
      <Card username="pavan" />
      <Card username="namna"/>
      <Card />
      
    </>
  );
}

export default App;
