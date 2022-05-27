import "./App.css";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const [isReady, setIsReady] = useState(false);
  const userInputRef = useRef();
/** 
  function checkForInput() {
    setText(userInputRef.current.value);
    if (userInputRef.current.value === "Ready!") {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }
  */
  useEffect(() => {
    // setText(userInputRef.current.value);
    if (text === "Ready!") {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [text]);

  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="Navi-Custom" to="/pokedex">
          <img
            hidden={!isReady}
            src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
            className="App-logo"
            alt="logo"
            style={{ padding: "10px" }}
          />
        </NavLink>
        <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b>
        <p>Are you ready to be a pokemon master?</p>
        <input
          type="text"
          name="name"
          ref={userInputRef}
          onChange={() => setText(userInputRef.current.value)}
        />
        <span style={{ color: "red" }} hidden={isReady}>
          I am not ready yet!
        </span>
      </header>
    </div>
  );
}

export default Home;
