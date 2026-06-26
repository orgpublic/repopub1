import { createContext } from "react";
export const ThemeDataContext = createContext();
const ThemeContext = (props) => {
  return (
    <>
      <ThemeDataContext.Provider value="Data from Context Api">
        {props.children}
      </ThemeDataContext.Provider>
    </>
  );
};

export default ThemeContext;
