import { Link, Route, Routes } from "react-router";
import MainContent from "./MainContent";
import UseStatehook from "./UseStateHook";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const NavBar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/userlist">User List</Link>
        <Link to="/usestate">UseState</Link>
      </div>
      <div className="flex flex-row">
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/usestate" element={<UseStatehook />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/userlist/:id" element={<UserDetails />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default NavBar;
