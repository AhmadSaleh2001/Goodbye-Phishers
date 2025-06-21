import React from "react";
import { useState } from "react";
import ShowMsg from "../Helpers/ShowMsg";
import { useTranslation } from "react-i18next";
import { BASE_URL, BASE_URL_MODEL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Product() {
  const { t } = useTranslation();
  let [Tested, SetTested] = useState(false);
  let [URL, setURL] = useState("");
  let [Rate, SetRate] = useState(5);
  let [Feedback, SetFeedback] = useState("");
  let [Ans, SetAns] = useState([]);
  let HandleInput = (E) => {
    if (+E.target.value <= 5) SetRate(E.target.value);
  };

  let Check = async (E) => {
    console.log("yes");
    E.preventDefault();
    let formData = new FormData();
    formData.append("URL", URL);
    let CurrAns = await fetch(BASE_URL_MODEL + "/classify/", {
      method: "POST",
      body: formData,
      headers: { ContentType: "multipart/form-data" },
    });
    CurrAns = await CurrAns.json();
    // console.log(CurrAns);

    if (CurrAns["Good"] == "1") SetAns(["alert-success", "Not Phishing"]);
    else {
      SetAns(["alert-danger", "Phishing"]);
      let Item = Math.floor(Math.random() * 5) + 1;
      toast(t("tip" + Item + "_content"), {
        position: "top-right",
        autoClose: 30000,
      });
    }
    SetTested(true);
  };

  let HandleAddRate = async (E) => {
    E.preventDefault();
    try {
      let Ans = await fetch(BASE_URL + "/rate/add", {
        method: "POST",
        body: JSON.stringify({
          rate_from_5: Rate,
          feedback: Feedback,
          url: URL,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      Ans = await Ans.json();

      ShowMsg("success", "Done", Ans.Msg);
    } catch (Err) {
      ShowMsg("error", "Oops...", Err.message);
    }
  };
  return (
    <form
      className="text-center d-flex flex-column align-items-center"
      method="POST"
    >
      <div className="mb-3 d-flex m-2 align-items-center justify-content-around">
        <label className="form-label me-2 ms-2">{t("url_lbl")}</label>
        <input
          type="url"
          className="form-control col-sm-12"
          id="URL"
          value={URL}
          onInput={(E) => {
            setURL(E.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="btn btn-primary me-2 ms-2"
          onClick={(E) => Check(E)}
        >
          {t("check_btn")}
        </button>
      </div>

      {Tested && <div className={"alert " + Ans[0]}>{Ans[1]}</div>}

      {Tested && (
        <div className="mb-3">
          <label className="form-label">{t("rate_lbl")}</label>
          <input
            type="number"
            className="form-control col-sm-12 mb-3"
            id="Number"
            required
            min={0}
            max={5}
            value={Rate}
            onInput={(E) => HandleInput(E)}
          />

          <label htmlFor="Feedback" className="form-label">
            {t("feedback_lbl")}
          </label>
          <textarea
            className="form-control"
            id="Feedback"
            rows="3"
            onInput={(E) => SetFeedback(E.target.value)}
            value={Feedback}
            required
          ></textarea>
        </div>
      )}
      <button
        type="submit"
        className="btn btn-success"
        onClick={(E) => HandleAddRate(E)}
        disabled={!Tested}
      >
        {t("rate_btn")}
      </button>

      <ToastContainer />
    </form>
  );
}

export default Product;
