import React from "react";
import StopClock from "../images/StopClock.jpg";
import AdvancedAlgorithms from "../images/AdvancedAlgorithms.jpg";
import UserFirendly from "../images/UserFirendly.jpg";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t("welcome_title")}</h1>
            <p className="lead text-muted">{t("welcome_description")}</p>
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="container marketing text-center">
        <div className="row">
          <div className="col-lg-4">
            <i className="fa-regular fa-square-check fa-3x text-success"></i>
            <h2>{t("feature_fast_headline")}</h2>
            <p>{t("feature_fast")}</p>
          </div>
          <div className="col-lg-4">
            <i className="fa-solid fa-face-smile fa-3x text-warning"></i>
            <h2>{t("feature_free_headline")}</h2>
            <p>{t("feature_free")}</p>
          </div>
          <div className="col-lg-4">
            <i className="fa-solid fa-shield fa-3x text-info"></i>
            <h2>{t("feature_secure_headline")}</h2>
            <p>{t("feature_secure")}</p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette text-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">{t("section1_headline")}</h2>
            <p className="lead">{t("section1_content")}</p>
          </div>
          <div className="col-md-5">
            <img src={StopClock} alt="" className="img-thumbnail" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette text-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">{t("section2_headline")}</h2>
            <p className="lead">{t("section2_content")}</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={AdvancedAlgorithms} alt="" className="img-thumbnail" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette text-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">{t("section3_headline")}</h2>
            <p className="lead">{t("section3_content")}</p>
          </div>
          <div className="col-md-5">
            <img src={UserFirendly} alt="" className="img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
