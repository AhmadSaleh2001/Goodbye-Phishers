import React from "react";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  return <div>{t("about_us_content")}</div>;
};

export default AboutUs;
