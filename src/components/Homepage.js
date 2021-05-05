import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styles/home.css";

export default function Homepage() {
  const dispatch = useDispatch();

  const login = (response) => {
    console.log(response);

    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && (
        <div className="login__message">
          <h2>The</h2>
          <h1>
            bl<span>☺︎</span>g.
          </h1>
          <p>To inspire.. EMPOWER.. and educate the world.</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
}
