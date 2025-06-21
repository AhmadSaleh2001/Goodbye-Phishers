import React from "react";
import useAuth from "./useAuth";
import { BASE_URL } from "../config";
function useLogout() {
  let { SetUser, SetToken } = useAuth();
  let Logout = async () => {
    try {
      SetUser(null);
      SetToken(null);
      await fetch(BASE_URL + "/admin/logout", {
        credentials: "include",
      });
    } catch (Err) {
      console.log("Error When Logout", Err);
    }
  };

  return Logout;
}

export default useLogout;
