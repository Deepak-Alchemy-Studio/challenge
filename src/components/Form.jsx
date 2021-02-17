import "./Form.css";
import $ from "jquery";

import React, { useRef } from "react";

const Form = () => {
  const inputRef = useRef();
  const triggerUploader = () => {
    inputRef.current.click();
  };

  const changeInput = async () => {
    const images = $(".images");
    const reader = new FileReader();
    reader.onload = (e) => {
      images.append(
        '<div class="img" onclick="this.remove()" style="background-image: url(\'' +
          e.target.result +
          '\');" rel="' +
          e.target.result +
          '"><span>remove</span></div>'
      );
    };
    console.log(inputRef.current.files[0]);
    if (inputRef.current.files[0]) {
      await alert("file uploaded");
      reader.readAsDataURL(inputRef.current.files[0]);
    }
  };

  return (
    <div className="form">
      <div className="wrapper">
        <div className="sections">
          <h1 className="header">File uploader</h1>
          <div className="images">
            <div className="pic" onClick={() => triggerUploader()}>
              add
            </div>
            <input
              ref={inputRef}
              onChange={changeInput}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
