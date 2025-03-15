import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Changed to Upper case", "success");
  };
  const handleCopyClick = () => {
    console.log("Copied to clipboard");    
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };
  
  const handleLowClick = () => {
    console.log("Upper Case was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Changed to lower case", "success");
  };
  const hanldeOnChange = (e) => {
    console.log("Upper Case was clicked");
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example Text here
        </label> */}
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            //   id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1b1e21",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="8"
            value={text}
            onChange={hanldeOnChange}
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-2 mx-4"
            onClick={handleLowClick}
          >
            Convert to Lower case
          </button>
          <button
            className="btn btn-primary my-2"
            onClick={handleCopyClick}
          >
            Copy to clipboard
          </button>
          <button
            className="btn btn-primary my-2 mx-4"
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className={`container my-2 rounded-xl border p-3 text-${props.mode === "light" ? "dark" : "light"}`}
      style={{borderRadius:"12px"}}>
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Your text Summary
        </h1>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p >
          {0.008 * text.split(" ").length} minutes to read
        </p>
        <div
          className={`border border-${props.mode === "light" ? "dark" : "light"} rounded-lg p-3`}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#1b1e21",
            color: props.mode === "light" ? "black" : "white",
            borderRadius: "12px" ,
          }}
          // style={{
          //   backgroundColor: props.mode === "light" ? "white" : "#1b1e21",
          //   color: props.mode === "light" ? "black" : "white",
          // }}
        >
          <h2>Preview</h2>
          <p
          // style={{
          //   backgroundColor: props.mode === "light" ? "white" : "#1b1e21",
          //   color: props.mode === "light" ? "black" : "white",
          // }}
          >
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
