import "./App.css";
import Counter from "./assets/images/counter.png";
import Moins from "./assets/images/moins.png";
import Plus from "./assets/images/plus.png";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState([0]);

  return (
    <div>
      <header>
        <div className="header">
          <img src={Counter} alt="logo" />
          <h1>React Counter V2</h1>
        </div>
      </header>
      <main className="main">
        <div className="ajoutBtn">
          <button
            className="counterPlus"
            onClick={() => {
              const newCounter = [...counter];
              newCounter.push(0);
              setCounter(newCounter);
            }}
          >
            Add counter
          </button>
        </div>

        {counter.map((elem, index) => {
          return (
            <div className="container" key={index}>
              <div className="elemHaut">
                <img
                  src={Moins}
                  alt="moins"
                  onClick={() => {
                    setCounter(counter[index] - 1);
                  }}
                />
                <span className="counter">{elem}</span>
                <img
                  src={Plus}
                  alt=" plus"
                  onClick={() => {
                    setCounter(counter[index] + 1);
                  }}
                />
              </div>
              <div className="elemBas">
                <button
                  className="reset"
                  onClick={() => {
                    setCounter(counter[index]);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
