import { BrowserRouter } from "react-router";
import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import ThemeContext from "./components/contexts/ThemeContext";

function App() {
  return (
    <>
    <ThemeContext>
      <BrowserRouter>
        <NavBar />
        <div className="bg-gray-400 p-4 flex flex-row">{Date()}</div>
      </BrowserRouter>
      </ThemeContext>
    </>
  );
}

export default App;
