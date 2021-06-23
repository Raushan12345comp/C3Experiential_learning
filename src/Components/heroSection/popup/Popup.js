import React, { useRef, useEffect, useCallback } from "react";
import "./popup.css";

import { MdClose } from "react-icons/md";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Popup = ({ showPopup, setShowPopup }) => {

  return (
    <>
      {showPopup ? (
        <div className="background">
          <div className="popup-wrapper">
            <button
              className="popup-close"
              onClick={() => setShowPopup((prev) => !prev)}
            >
              <MdClose />
            </button>
            <img className="popupImg" src="Images/popup-img.jpg"></img>
            <div className="popupContent">
              <h3>Excel in math and science.</h3>
              <button className="popup-button facebook">
                <FaFacebook className="popup-icon" />
                Log in with Facebook
              </button>
              <button className="popup-button">
                <FaGoogle className="popup-icon" />
                Log in with Google
              </button>
              <button className="popup-button apple">Continue with apple</button>
              <button className="popup-button">Log in with email</button>

              <p className="popup-para">New user?<span><u>Sign Up</u></span></p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
