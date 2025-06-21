import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyContext from "./Helpers/MyContext";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import i18n from "i18next";

// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "querystring",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext>
);
