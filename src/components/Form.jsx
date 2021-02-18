import "./Form.css";
import $ from "jquery";

import React, { useRef, useState } from "react";

const Form = () => {
  const inputRef = useRef();
  const [error, setError] = useState(false);

  const triggerUploader = () => {
    inputRef.current.click();
  };

  const changeInput = async (e) => {
    const images = $(".images");
    const selected = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    if (selected && allowedTypes.includes(selected.type)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        e.preventDefault();
        console.log(e.target);
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
        alert("File uploaded");
        reader.readAsDataURL(inputRef.current.files[0]);
      }
    } else {
      setError(true);
      alert("The file uploaded is not an image file.");
    }
  };

  return (
    <div className="form">
      <div className="wrapper">
        <div className="sections">
          <h1 className="header">Image uploader</h1>
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
