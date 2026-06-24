import { BrowserRouter } from "react-router";
import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto p-4">
          <NavBar />
          <div className="bg-gray-400 p-4">Footer</div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
