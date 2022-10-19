import { useState } from "react";
import "./Output.css";

const Output = ({ id, task, date, result, setResult }) => {
  // console.log(result);
  const [cardShow, setCardShow] = useState(true);

  // console.log(date, task);

  const HandleDelete = (id) => {
    const arr = result.filter((item) => item.id !== id);
    setResult(arr);
  };

  return (
    <div className="cards">
      <div
        key={id}
        id={id}
        onClick={(e) => {
          setCardShow(!cardShow);
        }}
        className={cardShow ? "no-line" : "line-through"}
      >
        <p className="task-par">{task}</p>
        <p>{new Date(date).toString().replace(/GMT.*/g, "")}</p>
        <i className="fa-solid fa-xmark" onClick={() => HandleDelete(id)}></i>
      </div>
    </div>
  );
};

export default Output;
