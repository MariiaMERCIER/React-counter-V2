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
          {counter.length >= 3 ? (
            <button
              className="counterPlus"
              onClick={() => {
                setCounter([0]);
              }}
            >
              Close counter
            </button>
          ) : (
            <button
              className="counterPlus"
              onClick={() => {
                if (counter.length < 3) {
                  const newCounter = [...counter];
                  newCounter.push(0);
                  setCounter(newCounter);
                }
              }}
            >
              Add counter
            </button>
          )}
        </div>
        <div className="newCounter">
          {counter.map((elem, index) => {
            return (
              <div className="container">
                <div className="elemHaut">
                  <img
                    src={Moins}
                    alt="moins"
                    onClick={() => {
                      const newCounter = [...counter];
                      newCounter[index] = counter[index] - 1;
                      setCounter(newCounter);
                    }}
                    style={{ visibility: elem === 0 ? "hidden" : "visible" }}
                  />
                  <span className="counter">{elem}</span>
                  <img
                    src={Plus}
                    alt=" plus"
                    onClick={() => {
                      const newCounter = [...counter];
                      newCounter[index] = counter[index] + 1;
                      setCounter(newCounter);
                    }}
                    style={{ visibility: elem === 10 ? "hidden" : "visible" }}
                  />
                </div>
                <div className="elemBas">
                  <button
                    className="reset"
                    onClick={() => {
                      const newCounter = [...counter];
                      newCounter[index] = 0;
                      setCounter(newCounter);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer>
        <p>
          Made by <span>React</span> avec <span>Le Reacteur</span> by
          <span> Mariia MERCIER</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
