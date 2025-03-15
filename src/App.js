import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  // const [btnText, setBtnText] = useState("black")
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      // setBtnText("white");
      document.body.style.backgroundColor = "#242729";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      // setBtnText("black");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-2">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        <About />
      </div>
      <Alert alert={alert} />
    </div>
  );
}

export default App;
