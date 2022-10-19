import { useEffect, useState } from "react";
import Output from "../Output/Output";
import uuid from "../../../node_modules/uuid/dist/v1";
import "./Input.css";

const Input = ({ show }) => {
  const [input, setInput] = useState({
    id: uuid(),
    task: "",
    date: "",
  });

  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem("Tasks")) || []
  );

  // console.log(result);
  // console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();

    setResult([...result, input]);

    setInput({
      id: uuid(),
      task: "",
      date: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(result));
  });

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className={show ? "d-block" : "d-none"}
      >
        <div className="input-area d-flex flex-column">
          <label htmlFor="tasks">Task</label>
          <input
            required
            type="text"
            id="tasks"
            value={input.task}
            onChange={(e) => {
              setInput({ ...input, task: e.target.value });
            }}
          />
        </div>
        <div className="input-area d-flex flex-column">
          <label htmlFor="date">Date & Time</label>
          <input
            required
            type="datetime-local"
            name="date"
            id="date"
            value={input.date}
            onChange={(e) => {
              setInput({
                ...input,
                date: e.target.value,
              });
            }}
          />
        </div>

        <div className="text-center mb-4">
          <button className="save-btn">Save Task</button>
        </div>
      </form>

      <div className="output-area container">
        {result.length > 0 ? (
          result.map((item) => {
            return (
              <Output
                key={item.id}
                id={item.id}
                task={item.task}
                date={item.date}
                result={result}
                setResult={setResult}
              />
            );
          })
        ) : (
          <p className="text-center text-danger h3 py-2">There is no task</p>
        )}
      </div>
    </>
  );
};

export default Input;
