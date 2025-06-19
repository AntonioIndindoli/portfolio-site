import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Logout() {
  // set the cookie
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USER");
  cookies.remove("ISADMIN", true);

  window.location.href = "/";

  return <></>;
}
