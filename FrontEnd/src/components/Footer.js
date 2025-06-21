import React from "react";
import { useTranslation } from "react-i18next";
function Footer() {
  const D = new Date();
  const { t } = useTranslation();
  return (
    <footer className="p-1 d-flex flex-column flex-wrap justify-content-between align-items-center border-top">
      <div className="col-md-12">
        <div className="text-center d-flex flex-column flex-md-row justify-content-center d-flex content">
          <div>{t("created_by")} &nbsp;</div>
          <div className="">
            {t("created_by1")}{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/ahmadsaleh2001/"
                target="_blank"
              >
                <i className="fab fa-linkedin" style={{ color: "#0072b1" }}></i>
              </a>
            </span>
          </div>
          &nbsp;
          <div className="">{t("created_by2")}</div>&nbsp;
          <div className="">{t("created_by3")}</div>
        </div>

        <div className="col-md-12 d-flex justify-content-center text-center">
          <div>{t("Supervisor")}&nbsp;</div>
          <div className="">{t("Supervisor1")}</div>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <span className="text-muted">
          © {D.getFullYear()} Goodbye Phishers, Inc
        </span>
      </div>
    </footer>
  );
}

export default Footer;
