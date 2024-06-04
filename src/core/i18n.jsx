import i18next from "i18next";
import Backaned from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next.use(Backaned).use(initReactI18next).init({
  lng: "en",
});

export default i18next;
