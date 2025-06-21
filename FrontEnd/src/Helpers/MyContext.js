import { createContext, useState } from "react";
const MyRealContext = createContext("ForActiveClassess");
const MyContext = ({ children }) => {
  let [Path, SetPath] = useState("/");
  let [User, SetUser] = useState(null);
  let [Token, SetToken] = useState(null);

  return (
    <>
      <MyRealContext.Provider
        value={{ Path, SetPath, User, SetUser, Token, SetToken }}
      >
        {children}
      </MyRealContext.Provider>
    </>
  );
};
export default MyContext;
export { MyRealContext };
