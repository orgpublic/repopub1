import "./App.css";
import Props1 from "./components/Props";
import { Props2 } from "./components/Props";
import { Props3 } from "./components/Props";

function App() {
  const title1 = "Hello Props1";
  const title2 = "Hello Props2";
  const title3 = "Hello Props3";

  const profile = {
    name: "John Doe",
    age: 25,
  };

  const locations = ["Delhi", "Mumbai", "Lucknow"];

  return (
    <>
      <h1>Hello React Props</h1>
      <Props1 title={title1} />
      <Props2 title={title2} profile={profile} />
      <Props3 title={title3} locations={locations} />
    </>
  );
}

export default App;
