import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styles/navbar.css";

export default function Navbar() {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleSearch = () => {
    // handle search
  };

  return (
    <div className="navbar">
      <h1 className="navbar__header">
        bl<span>☺︎</span>g.
      </h1>
      {isSignedIn && (
        <>
          <div className="blog__search">
            <input
              className="search__input"
              placeholder="Search for a blog"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="navbar__user-data">
            <Avatar
              className="user"
              src={userData?.imageUrl}
              alt={userData?.name}
            />
            <h1 className="signedIn">{userData?.givenName}</h1>
            <GoogleLogout
              clientId={process.env.REACT_APP_CLIENT_ID}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="logout__button"
                >
                  Logout
                </button>
              )}
              onLogoutSuccess={logout}
            />
          </div>
        </>
      )}
    </div>
  );
}
