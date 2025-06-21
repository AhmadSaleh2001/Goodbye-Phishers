import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tips from "./pages/Tips";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TrainModel from "./pages/TrainModel";
import Rates from "./pages/Rates";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import useAuth from "./Hooks/useAuth";
import useRefresh from "./Hooks/useRefresh";
import Redirect from "./Helpers/Redirect";

function App() {
  let { SetUser, SetToken } = useAuth();
  let Refresh = useRefresh();
  useEffect(() => {
    let Check = async () => {
      try {
        let Ans = await Refresh();
        SetToken(Ans.AToken);
        SetUser(Ans.User);
        // console.log("User : ", Ans.User);
        // console.log("Token : ", Ans.AToken);
      } catch (Err) {}
    };
    Check();
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="container MainContainer">
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Tips" element={<Tips />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>

          {/* Protected Paths */}
          <Route element={<RequireAuth />}>
            <Route path="/Rates" element={<Rates />} />
            <Route path="/TrainModel" element={<TrainModel />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
