import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./logout.module.css";

export function LogoutButton() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <p>ログインユーザー：{isLoading}</p>
      <button className={classes.logoutbutton} onClick={() => logout({ returnTo: window.location.origin })}>
        Logut
      </button>
    </div>
  );
};
