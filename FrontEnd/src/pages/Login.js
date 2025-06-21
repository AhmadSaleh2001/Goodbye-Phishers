import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Redirect from "../Helpers/Redirect";
import { BASE_URL } from "../config";
function Login() {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { User, SetUser, SetToken } = useAuth();
  let HandleLogin = async (E) => {
    E.preventDefault();

    let headers = new Headers({ "Content-Type": "application/json" });

    let Response = await fetch(BASE_URL + "/admin/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers,
      credentials: "include",
    });

    let Data = await Response.json();
    if (Response.status == 401 || Response.status == 406) {
      Redirect("error", Data.Msg, "", function () {});
    } else {
      SetUser(Data.User);
      SetToken(Data.AToken);
      Redirect("success", Data.Msg, "", function () {
        navigate("/");
      });
    }
  };
  return (
    <form className="text-center d-flex flex-column align-items-center">
      <center className="mb-3">
        <h2>Login</h2>
      </center>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control col-sm-12"
          id="Email"
          required
          value={email}
          onInput={(E) => setEmail(E.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control col-sm-12"
          id="Password"
          required
          value={password}
          onInput={(E) => setPassword(E.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={(E) => HandleLogin(E)}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
