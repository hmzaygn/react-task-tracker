import { useState } from "react";
import Input from "../Input/Input";
import "./Main.css";

const Main = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="main-div container d-flex flex-column align-items-center">
      <div className="container d-flex flex-column align-items-center">
        <h1>Task Tracker</h1>
        <button className="close-btn h5" onClick={() => setShow(!show)}>
          {show ? "Close Task Bar" : "Open Task Bar"}
        </button>
      </div>

      <Input show={show} />
    </div>
  );
};

export default Main;
