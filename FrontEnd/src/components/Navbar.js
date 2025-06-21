import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import UserLoggedIn from "../images/UserLoggedIn.png";
import "../layout/backend.css";
import { MyRealContext } from "../Helpers/MyContext";
import useLogout from "../Hooks/useLogout";
import i18next from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Logo from "../images/Logo.jpg";
import { auto } from "@popperjs/core";
const Languages = [
  {
    code: "en",
    name: "english",
    countriy_code: "gb",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    countriy_code: "sa",
    dir: "rtl",
  },
];
function Navbar() {
  const { t } = useTranslation();
  let [LangCode, setLangCode] = useState(cookies.get("i18next") || "en");

  let Loc = useLocation();
  let navigate = useNavigate();
  let logout = useLogout();

  let { SetPath, User } = useContext(MyRealContext);
  useEffect(() => {
    // console.log(Loc.pathname);
    SetPath(Loc.pathname);
  }, [Loc]);

  useEffect(() => {
    const CurrLang = Languages.find((L) => L.code === LangCode);
    document.body.dir = CurrLang.dir;
  }, [LangCode]);

  let Links = [
    ["home_nav_btn", "/"],
    ["product_nav_btn", "/Product"],
    ["tips_nav_btn", "/Tips"],
    ["about_nav_btn", "/AboutUs"],
  ];

  let HandleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <header className="p-2 mb-3 border-bottom MyHeader">
      <div
        className="d-flex flex-column flex-md-row
 align-items-center justify-content-md-center justify-content-lg-between"
      >
        <Link
          to={"/"}
          className="fs-4 d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <img
            src={Logo}
            className="rounded"
            style={{ width: 150, height: 100 }}
            alt="logo"
          />
          {/* {t("welcome_title")} */}
        </Link>

        {/* <div className="d-flex">
          
        </div> */}

        <div>
          <ul className="nav col-12 d-flex flex-column flex-md-row text-center col-md-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {Links.map((Item, Idx) => {
              return <NavItem Name={Item[0]} To={Item[1]} key={Idx} />;
            })}
          </ul>
        </div>

        <div className="d-flex">
          {!User && (
            <Link to={"/Login"} className="btn btn-primary">
              {t("login_btn")}
            </Link>
          )}

          {User && (
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={UserLoggedIn}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link className="dropdown-item" to={"/TrainModel"}>
                    Train Model
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to={"/Rates"}>
                    Rates
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item text text-danger"
                    onClick={() => HandleLogout()}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="dropdown ms-2 me-2">
            <a
              className=""
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-globe fa-2x"></i>
            </a>

            <ul
              className="dropdown-menu text-center"
              aria-labelledby="dropdownMenuLink"
            >
              {Languages.map(({ code, name, country_code }, Idx) => {
                return (
                  <li key={Idx}>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        i18next.changeLanguage(code);
                        setLangCode(code);
                      }}
                      disabled={code == LangCode}
                    >
                      <span
                        className={"flag-icon flag-icon-" + country_code}
                      ></span>
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
