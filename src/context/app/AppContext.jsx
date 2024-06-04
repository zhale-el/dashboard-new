import { createContext, useContext, useReducer } from "react";
import appReducer from "./AppReducer";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  language: localStorage.getItem("language") || "fa",
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeLanguage = (language) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  return (
    <>
      <AppContext.Provider value={{ ...state, changeLanguage }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
