import { BrowserRouter } from "react-router";
import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="bg-gray-400 p-4 flex flex-row">{Date()}</div>
      </BrowserRouter>
    </>
  );
}

export default App;
