import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyRealContext } from "../Helpers/MyContext";
import { useTranslation } from "react-i18next";
function NavItem({ Name, To }) {
  let { Path } = useContext(MyRealContext);
  const { t } = useTranslation();
  return (
    <li>
      <Link
        to={To}
        className={`nav-link link-dark px-2 ${Path == To ? "Active" : ""}`}
      >
        {t(Name)}
      </Link>
    </li>
  );
}

export default NavItem;
