import { useState } from "react";
import Logo from "./assets/images/mak_logo.png";

const App = () => {
  let [passShow, setPassShow] = useState(false);
  let [error, setError] = useState("");
  let handleClick = () => {
    let inputBox = document.querySelector(".input_box");

    // setPassShow(true)
    if (inputBox.value !== "") {
      if (passShow == true) {
        setPassShow(false);
        setError("");
      } else {
        setPassShow(true);
        setError("");
      }
    } else {
      setError("Password cannot be empty");
    }
  };

  return (
    <>
      <div className="container">
        <div className="password_showing">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <h1>Password Visibility Control</h1>
          <div className="input_btn">
            <input
              type={passShow ? "text" : "password"}
              placeholder="Enter your password"
              className="input_box"
            />
            <button onClick={handleClick} className="btn">
              {" "}
              {passShow ? "Hide" : "Show"}{" "}
            </button>
          </div>
          <div>
            <p className="error"> {error} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
