import "./App.css";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-gray-800 text-white p-4">Navigation</div>
        <MainContent />
        <div className="bg-gray-400 p-4">Footer</div>
      </div>
    </>
  );
}

export default App;
