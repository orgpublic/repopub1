import { Link, Route, Routes } from "react-router";
import MainContent from "./MainContent";
import ApiCall from "./ApiCall";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import UseStatehook from "./UseStateHook";
import Routing from "./Routing";

const NavBar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/userlist">User List</Link>
        <Link to="/apicall">ApiCall</Link>
        <Link to="/routing">Routing</Link>
      </div>
      <div className="flex flex-row">
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/apicall" element={<ApiCall />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/userlist/:id" element={<UserDetails />}></Route>
          <Route path="/routing" element={<Routing/>}></Route>
          <Route path="/usestatehook" element={<UseStatehook/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default NavBar;
