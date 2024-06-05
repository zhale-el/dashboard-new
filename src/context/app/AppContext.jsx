import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./AppReducer";
import { useTranslation } from "react-i18next";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  language: localStorage.getItem("language") || "fa",
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);

    document.body.dataset.direction = state.language === "fa" ? "rtl" : "ltr";
  }, [state.language]);

  return (
    <>
      <AppContext.Provider value={{ ...state, changeLanguage }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
