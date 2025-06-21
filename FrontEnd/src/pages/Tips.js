import React from "react";
import { useTranslation } from "react-i18next";
function Tips() {
  const { t } = useTranslation();
  return (
    <ol className="list-group list-group-numbered">
      {[1, 2, 3, 4, 5].map((Item, Idx) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={Idx}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{t("tip" + Item + "_headline")}</div>
              {t("tip" + Item + "_content")}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Tips;
