import { useContext } from "react";
import { MyRealContext } from "../Helpers/MyContext";
let useAuth = () => {
  return useContext(MyRealContext);
};

export default useAuth;
