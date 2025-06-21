import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import Redirect from "../Helpers/Redirect";
import useRefresh from "../Hooks/useRefresh";
import { BASE_URL } from "../config";
function Rates() {
  let [Data, SetData] = useState([]);
  let { Token, SetToken, SetUser } = useAuth();
  let navigate = useNavigate();
  let Refresh = useRefresh();

  useEffect(() => {
    // console.log(Token);
    let getData = async (Token) => {
      let Ans = await fetch(BASE_URL + "/rate/getAll", {
        method: "GET",
        headers: {
          Authorization: "CatchMeIfYouCan " + Token,
        },
      });
      if (Ans.status == 401) {
        try {
          let Ans = await Refresh();
          getData(Ans.AToken);
        } catch (Error) {
          // console.log("New Error : ", Error.message);
          SetUser(null);
          SetToken(null);
          Redirect("error", "Oops...", Error.message, () => {
            navigate("/");
          });
        }
      } else {
        Ans = await Ans.json();
        SetData(Ans.Data);
      }
    };

    getData(Token);
  }, []);
  return (
    <div>
      <center>
        <h1>Rates</h1>
      </center>
      {!Data && <h2>Loading ...</h2>}
      {Data && (
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">URL</th>
              <th scope="col">Rate From 5</th>
              <th scope="col">Feedback</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((Item, Idx) => {
              return (
                <tr key={Idx} className="">
                  <th scope="row">{Item.id}</th>
                  <td>{Item.url}</td>
                  <td>{Item.rate_from_5}</td>
                  <td>{Item.feedback}</td>
                  <td>{new Date(Item.createdAt).toUTCString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Rates;
