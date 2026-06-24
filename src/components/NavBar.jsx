import { Link, Route, Routes } from "react-router";
import MainContent from "./MainContent";
import UseStatehook from "./UseStateHook";

const NavBar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-4">
        <Link to="/">Home</Link>
        <Link to="/usestate" className="p-10">UseState</Link>
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/usestate" element={<UseStatehook />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default NavBar;
